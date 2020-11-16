import { Component, OnInit } from '@angular/core';
import { SeguidorField, Seguidor } from '../seguidorField.model';
import { getTestBed } from '@angular/core/testing';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seguidor-card',
  templateUrl: './seguidor-card.component.html',
  styleUrls: ['./seguidor-card.component.css']
})
export class SeguidorCardComponent implements OnInit {
  loading: boolean = true;
  clickValue: number;
  seguidorField: SeguidorField = new SeguidorField();
  title  = 'Huerta Solar Ballesteros';
  temp: Seguidor = new Seguidor();
  // rData: any = this.getSeguidorData();
  rData: any = {};
  segNum: number;
  // seguidorDataUrl ='https://vpn-v2.myrex24.net/ProvaOficina20201013@inacsl/web/webserver';
  seguidorDataUrl = './assets/seguidorData.json';
  // inici codi per mostrar el boto en Auto o Manual
  // fa falta canviar-ho per a la detecció automatica de si esta en manual o automatic
  onClickMe() {
    if (this.clickValue === 0){
      this.clickValue = 1;
    } else{
      this.clickValue = 0;
    }
    console.log(this.clickValue);
  }
   // fi codi per mostrar el boto en Auto o Manual
   
  

  constructor(private _http: HttpClient, private router:Router) {
    this.clickValue = 0;
   }


  ngOnInit() {
    console.log('ngOnInit');
    this.getSeguidorDataHttp().subscribe(data => {
      console.log('Dades PLC', data);
      this.rData = data;
     });
    setTimeout(() => {
      this.seguidorField.spOrientacio = this.rData.SP_Orientacio;
      this.seguidorField.spInclinacio = this.rData.SP_Inclinacio;
      this.seguidorField.rdOrientacioGeneral = this.rData.RD_Orientacio_General;
      this.seguidorField.rdInclinacioGeneral = this.rData.RD_Inclinacio_General;
      this.seguidorField.estatGeneral = this.rData.Estat_General;
      this.seguidorField.ssGeneral = this.rData.SS_General;
      this.seguidorField.alarmesGeneral = this.rData.Alarmes_General;
      this.seguidorField.ventActual = this.rData.Vent_Actual;
      this.seguidorField.velocitatMaximaVent = this.rData.Velocitat_Maxima_Vent;
      this.seguidorField.alarmaVent = this.rData.Alarma_Vent;
      this.seguidorField.rearmeAlarmes = this.rData.Rearme_Alarmes;
      this.seguidorField.ventMaximHistoric = this.rData.Vent_Maxim_Historic;
      this.seguidorField.dtlMaxVent = this.rData.DTL_Max_Vent;
      this.seguidorField.latitud = this.rData.Latitud;
      this.seguidorField.longitud = this.rData.Longitud;

      this.seguidorField.sunrise = '6:58 am';
      this.seguidorField.sunset = '11:40 pm';
      this.seguidorField.date = 'Tue, 01 May 2018 06:00 PM CEST';
      // console.log(this.rData);
      for (let i = 1; i < 10; i++) {
        const temp: Seguidor = new Seguidor();
        temp.nom = `SS-${i}`;
        const vars = [['spOrientacioMan', 'SP_Orientacio_Man'], ['spInclinacioMan', 'SP_Inclinacio_Man'], ['manual', 'Manual'], ['rdOrientacio', 'RD_Orientacio'], ['rdInclinacio', 'RD_Inclinacio'], ['correccio', 'Correccio'], ['entradaMinOrientacio', 'Entrada_Min_Orientacio'],
         ['sortidaMinOrientacio', 'Sortida_Min_Orientacio'],
         ['entradaMaxOrientacio', 'Entrada_Max_Orientacio'],
         ['sortidaMaxOrientacio', 'Sortida_Max_Orientacio'],
         ['entradaMinInclinacio', 'Entrada_Min_Inclinacio'],
         ['sortidaMinInclinacio', 'Sortida_Min_Inclinacio'],
         ['entradaMaxInclinacio', 'Entrada_Max_Inclinacio'],
         ['sortidaMaxInclinacio', 'Sortida_Max_Inclinacio'],
         ['limitOrientacioMinim', 'Limit_Orientacio_Minim'],
         ['limitOrientacioMaxim', 'Limit_Orientacio_Maxim'],
         ['limitInclinacioMinim', 'Limit_Inclinacio_Minim'],
         ['limitInclinacioMaxim', 'Limit_Inclinacio_Maxim'],
         ['start', 'Start'],
         ['stop', 'Stop'],
         ['status', 'status'],
         ['alarmes', 'Alarmes'],
         ['dtlAlarmes', 'DTL_Alarmes'],
         ['potenciaInv1', 'Potencia_Inv1'],
         ['potenciaInv2', 'Potencia_Inv2']
      ];
        vars.forEach(v => {
          temp[v[0]] = this.rData[`SS${i}_${v[1]}`];
        });
        this.seguidorField.seguidors.push(temp);

      }
      console.log('call to server finalizado');
    }, 1000);
    this.segNum = 0;
    setTimeout(()=>{ this.loading=false}, 4000)
  }
  nextSeg() {
    console.log('nextSeg');
    this.segNum++;
    this.segNum = this.segNum % this.seguidorField.seguidors.length;
  }
  prevSeg() {
    console.log('prevSeg');
    this.segNum--;
    this.segNum = ((this.segNum + this.seguidorField.seguidors.length)
          % this.seguidorField.seguidors.length)
          % this.seguidorField.seguidors.length;
  }
  getSeguidorDataHttp() {
    // const headers = new HttpHeaders({
    //   Cookie: 'PHPSESSID=521d59eedt9er8bghi29c7uoq6',
    //   Accept: '*/*',
    //   'Access-Control-Allow-Headers': '',
    //   'Access-Control-Allow-Origin': '*',
    //   Connection: 'keep-alive',
    //   'Access-Control-Request-Method': 'GET',
    //   'Access-Control-Request-Headers': 'origin, x-requested-with, accept'
    // });
    // return this._http.get(url, {headers});
    const url = `${this.seguidorDataUrl}`;
    return this._http.get(url);
  }
}
