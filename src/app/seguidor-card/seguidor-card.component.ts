import { Component, OnInit } from '@angular/core';
import { SeguidorField, Seguidor } from '../seguidorField.model';
import { getTestBed } from '@angular/core/testing';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-seguidor-card',
  templateUrl: './seguidor-card.component.html',
  styleUrls: ['./seguidor-card.component.css'],
  template: `
    <button (click)="onClickMe()">Click me!</button>`
})
export class SeguidorCardComponent implements OnInit {

  //inici codi per mostrar el boto en Auto o Manual
  //fa falta canviar-ho per a la detecció automatica de si esta en manual o automatic
  clickValue:number;
  onClickMe() {
    if(this.clickValue == 0){
      this.clickValue = 1;
    } else{
      this.clickValue = 0;
    }
    console.log(this.clickValue);
  }
   //fi codi per mostrar el boto en Auto o Manual


  seguidorField: SeguidorField = new SeguidorField();
  title  = 'Ballesteros';
  /* {
"limit_vent"  : ":="DB_HMI_inter".limit_vent:",
"temps_rearme_vent"  : ":="DB_HMI_inter".temps_rearme_vent:",
"error_orientacio"  : ":="DB_HMI_inter".error_orientacio:",
"error_inclinacio"  : ":="DB_HMI_inter".error_inclinacio:",
"offset_orientacio"  : ":="DB_HMI_inter".offset_orientacio:",
"offset_inclinacio"  : ":="DB_HMI_inter".offset_inclinacio:",
"vent"  : ":="DB_HMI_inter".vent:"
} */
temp: Seguidor = new Seguidor();
// rData: any = this.getSeguidorData();
rData: any = {};
segNum: number;
// seguidorDataUrl ='https://vpn-v2.myrex24.net/ProvaOficina20201013@inacsl/web/webserver';
  seguidorDataUrl = './assets/seguidorData.json';
<<<<<<< Updated upstream
  // Gauge
    gaugeType = 'arch';
    //gaugeValue = this.seguidorField.seguidors[this.segNum].rdOrientacio;
    //gaugeValue = 0;
    gaugeLabel = 'Orientación';
    gaugeAppendText = '';

  constructor(private _http: HttpClient) {
=======
  constructor(private http: HttpClient) {
    this.clickValue = 0;
>>>>>>> Stashed changes
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
      //console.log(this.rData);
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
         ['status', 'status']
      ];
        vars.forEach(v => {
          //console.log(v[0]);
          //console.log(`SS${i}_${v[1]}`);
          temp[v[0]] = this.rData[`SS${i}_${v[1]}`];
        });
        //console.log(temp);
        this.seguidorField.seguidors.push(temp);

      }
      
      // this.seguidor.temperature = 18;
      // this.seguidor.winddirection = 270;
      // this.seguidor.windspeed = 26;

      console.log('call to server finalizado');
      //console.log(this.seguidorField);
    }, 3000);
    this.segNum = 0;
    //console.log(this.seguidorField);
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
    const headers = new HttpHeaders({
      Cookie: 'PHPSESSID=521d59eedt9er8bghi29c7uoq6',
      Accept: '*/*',
      'Access-Control-Allow-Headers': '',
      'Access-Control-Allow-Origin': '*',
      Connection: 'keep-alive',
      'Access-Control-Request-Method': 'GET',
      'Access-Control-Request-Headers': 'origin, x-requested-with, accept'
    });
    const url = `${this.seguidorDataUrl}`;
    return this._http.get(url);
    // return this._http.get(url, {headers});
  }
  getSeguidorData() {
    const b = { 'SP_Orientacio' : '254.2509', 'SP_Inclinacio' : '40', 'RD_Orientacio_General' : '0', 'RD_Inclinacio_General' : '0', 'Estat_General' : '0', 'SS_General' : 'SS7', 'Alarmes_General' : '1', 'Vent_Actual' : '0', 'Velocitat_Maxima_Vent' : '40', 'Alarma_Vent' : '0', 'Rearme_Alarmes' : '0', 'Vent_Maxim_Historic' : '0', 'DTL_Max_Vent' : 'DTL#1970-01-01-00:00:00', 'Latitud' : '40', 'Longitud' : '-2.15', 'SS1_SP_Orientacio_Man' : '0', 'SS1_SP_Inclinacio_Man' : '0', 'SS1_Manual' : '0', 'SS1_RD_Orientacio' : '0', 'SS1_RD_Inclinacio' : '0', 'SS1_Correccio' : '0', 'SS1_Entrada_Min_Orientacio' : '830.3', 'SS1_Sortida_Min_Orientacio' : '11', 'SS1_Entrada_Max_Orientacio' : '26826', 'SS1_Sortida_Max_Orientacio' : '354', 'SS1_Entrada_Min_Inclinacio' : '700', 'SS1_Sortida_Min_Inclinacio' : '5', 'SS1_Entrada_Max_Inclinacio' : '3200', 'SS1_Sortida_Max_Inclinacio' : '40', 'SS1_Limit_Orientacio_Minim' : '15', 'SS1_Limit_Orientacio_Maxim' : '344', 'SS1_Limit_Inclinacio_Minim' : '8', 'SS1_Limit_Inclinacio_Maxim' : '35', 'SS1_Start' : '0', 'SS1_Stop' : '0', 'SS2_SP_Orientacio_Man' : '0', 'SS2_SP_Inclinacio_Man' : '0', 'SS2_Manual' : '0', 'SS2_RD_Orientacio' : '0', 'SS2_RD_Inclinacio' : '0', 'SS2_Correccio' : '0', 'SS2_Entrada_Min_Orientacio' : '0', 'SS2_Sortida_Min_Orientacio' : '0', 'SS2_Entrada_Max_Orientacio' : '0', 'SS2_Sortida_Max_Orientacio' : '0', 'SS2_Entrada_Min_Inclinacio' : '0', 'SS2_Sortida_Min_Inclinacio' : '0', 'SS2_Entrada_Max_Inclinacio' : '0', 'SS2_Sortida_Max_Inclinacio' : '0', 'SS2_Limit_Orientacio_Minim' : '0', 'SS2_Limit_Orientacio_Maxim' : '0', 'SS2_Limit_Inclinacio_Minim' : '0', 'SS2_Limit_Inclinacio_Maxim' : '0', 'SS2_Start' : '0', 'SS2_Stop' : '0', 'SS3_SP_Orientacio_Man' : '0', 'SS3_SP_Inclinacio_Man' : '0', 'SS3_Manual' : '0', 'SS3_RD_Orientacio' : '12.45834', 'SS3_RD_Inclinacio' : '-5.435848', 'SS3_Correccio' : '-13', 'SS3_Entrada_Min_Orientacio' : '6800', 'SS3_Sortida_Min_Orientacio' : '88', 'SS3_Entrada_Max_Orientacio' : '32912', 'SS3_Sortida_Max_Orientacio' : '428', 'SS3_Entrada_Min_Inclinacio' : '955', 'SS3_Sortida_Min_Inclinacio' : '8', 'SS3_Entrada_Max_Inclinacio' : '3566', 'SS3_Sortida_Max_Inclinacio' : '42', 'SS3_Limit_Orientacio_Minim' : '98', 'SS3_Limit_Orientacio_Maxim' : '270', 'SS3_Limit_Inclinacio_Minim' : '11', 'SS3_Limit_Inclinacio_Maxim' : '35', 'SS3_Start' : '0', 'SS3_Stop' : '0', 'SS4_SP_Orientacio_Man' : '0', 'SS4_SP_Inclinacio_Man' : '0', 'SS4_Manual' : '0', 'SS4_RD_Orientacio' : '0', 'SS4_RD_Inclinacio' : '0', 'SS4_Correccio' : '0', 'SS4_Entrada_Min_Orientacio' : '0', 'SS4_Sortida_Min_Orientacio' : '0', 'SS4_Entrada_Max_Orientacio' : '0', 'SS4_Sortida_Max_Orientacio' : '0', 'SS4_Entrada_Min_Inclinacio' : '0', 'SS4_Sortida_Min_Inclinacio' : '0', 'SS4_Entrada_Max_Inclinacio' : '0', 'SS4_Sortida_Max_Inclinacio' : '0', 'SS4_Limit_Orientacio_Minim' : '0', 'SS4_Limit_Orientacio_Maxim' : '0', 'SS4_Limit_Inclinacio_Minim' : '0', 'SS4_Limit_Inclinacio_Maxim' : '0', 'SS4_Start' : '0', 'SS4_Stop' : '0', 'SS5_SP_Orientacio_Man' : '0', 'SS5_SP_Inclinacio_Man' : '0', 'SS5_Manual' : '0', 'SS5_RD_Orientacio' : '0', 'SS5_RD_Inclinacio' : '0', 'SS5_Correccio' : '0', 'SS5_Entrada_Min_Orientacio' : '0', 'SS5_Sortida_Min_Orientacio' : '0', 'SS5_Entrada_Max_Orientacio' : '0', 'SS5_Sortida_Max_Orientacio' : '0', 'SS5_Entrada_Min_Inclinacio' : '0', 'SS5_Sortida_Min_Inclinacio' : '0', 'SS5_Entrada_Max_Inclinacio' : '0', 'SS5_Sortida_Max_Inclinacio' : '0', 'SS5_Limit_Orientacio_Minim' : '0', 'SS5_Limit_Orientacio_Maxim' : '0', 'SS5_Limit_Inclinacio_Minim' : '0', 'SS5_Limit_Inclinacio_Maxim' : '0', 'SS5_Start' : '0', 'SS5_Stop' : '0', 'SS6_SP_Orientacio_Man' : '0', 'SS6_SP_Inclinacio_Man' : '0', 'SS6_Manual' : '0', 'SS6_RD_Orientacio' : '0', 'SS6_RD_Inclinacio' : '0', 'SS6_Correccio' : '0', 'SS6_Entrada_Min_Orientacio' : '0', 'SS6_Sortida_Min_Orientacio' : '0', 'SS6_Entrada_Max_Orientacio' : '0', 'SS6_Sortida_Max_Orientacio' : '0', 'SS6_Entrada_Min_Inclinacio' : '0', 'SS6_Sortida_Min_Inclinacio' : '0', 'SS6_Entrada_Max_Inclinacio' : '0', 'SS6_Sortida_Max_Inclinacio' : '0', 'SS6_Limit_Orientacio_Minim' : '0', 'SS6_Limit_Orientacio_Maxim' : '0', 'SS6_Limit_Inclinacio_Minim' : '0', 'SS6_Limit_Inclinacio_Maxim' : '0', 'SS6_Start' : '0', 'SS6_Stop' : '0', 'SS7_SP_Orientacio_Man' : '0', 'SS7_SP_Inclinacio_Man' : '0', 'SS7_Manual' : '0', 'SS7_RD_Orientacio' : '0', 'SS7_RD_Inclinacio' : '0', 'SS7_Correccio' : '0', 'SS7_Entrada_Min_Orientacio' : '1327.1', 'SS7_Sortida_Min_Orientacio' : '17.3', 'SS7_Entrada_Max_Orientacio' : '27300', 'SS7_Sortida_Max_Orientacio' : '355', 'SS7_Entrada_Min_Inclinacio' : '500', 'SS7_Sortida_Min_Inclinacio' : '4', 'SS7_Entrada_Max_Inclinacio' : '3800', 'SS7_Sortida_Max_Inclinacio' : '40', 'SS7_Limit_Orientacio_Minim' : '27.3', 'SS7_Limit_Orientacio_Maxim' : '345', 'SS7_Limit_Inclinacio_Minim' : '8', 'SS7_Limit_Inclinacio_Maxim' : '35', 'SS7_Start' : '0', 'SS7_Stop' : '0', 'SS8_SP_Orientacio_Man' : '0', 'SS8_SP_Inclinacio_Man' : '0', 'SS8_Manual' : '0', 'SS8_RD_Orientacio' : '0', 'SS8_RD_Inclinacio' : '0', 'SS8_Correccio' : '0', 'SS8_Entrada_Min_Orientacio' : '350', 'SS8_Sortida_Min_Orientacio' : '13', 'SS8_Entrada_Max_Orientacio' : '25263', 'SS8_Sortida_Max_Orientacio' : '354', 'SS8_Entrada_Min_Inclinacio' : '921', 'SS8_Sortida_Min_Inclinacio' : '4', 'SS8_Entrada_Max_Inclinacio' : '3276', 'SS8_Sortida_Max_Inclinacio' : '40', 'SS8_Limit_Orientacio_Minim' : '23', 'SS8_Limit_Orientacio_Maxim' : '344', 'SS8_Limit_Inclinacio_Minim' : '8', 'SS8_Limit_Inclinacio_Maxim' : '35', 'SS8_Start' : '0', 'SS8_Stop' : '0', 'SS9_SP_Orientacio_Man' : '0', 'SS9_SP_Inclinacio_Man' : '0', 'SS9_Manual' : '0', 'SS9_RD_Orientacio' : '0', 'SS9_RD_Inclinacio' : '0', 'SS9_Correccio' : '0', 'SS9_Entrada_Min_Orientacio' : '887', 'SS9_Sortida_Min_Orientacio' : '12', 'SS9_Entrada_Max_Orientacio' : '26500', 'SS9_Sortida_Max_Orientacio' : '350', 'SS9_Entrada_Min_Inclinacio' : '580', 'SS9_Sortida_Min_Inclinacio' : '4', 'SS9_Entrada_Max_Inclinacio' : '3500', 'SS9_Sortida_Max_Inclinacio' : '44', 'SS9_Limit_Orientacio_Minim' : '22', 'SS9_Limit_Orientacio_Maxim' : '340', 'SS9_Limit_Inclinacio_Minim' : '8', 'SS9_Limit_Inclinacio_Maxim' : '38', 'SS9_Start' : '0', 'SS9_Stop' : '0', };
    return { 'SP_Orientacio' : '238.7079', 'SP_Inclinacio' : '40', 'RD_Orientacio_General' : '0', 'RD_Inclinacio_General' : '0', 'Estat_General' : '0', 'SS_General' : 'SS2', 'Alarmes_General' : '1', 'Vent_Actual' : '0', 'Velocitat_Maxima_Vent' : '40', 'Alarma_Vent' : '0', 'Rearme_Alarmes' : '0', 'Vent_Maxim_Historic' : '0', 'DTL_Max_Vent' : 'DTL#1970-01-01-00:00:00', 'Latitud' : '40', 'Longitud' : '-2.15', 'SS1_SP_Orientacio_Man' : '0', 'SS1_SP_Inclinacio_Man' : '0', 'SS1_Manual' : '0', 'SS1_RD_Orientacio' : '0', 'SS1_RD_Inclinacio' : '0', 'SS1_Correccio' : '0', 'SS1_Entrada_Min_Orientacio' : '830.3', 'SS1_Sortida_Min_Orientacio' : '11', 'SS1_Entrada_Max_Orientacio' : '26826', 'SS1_Sortida_Max_Orientacio' : '354', 'SS1_Entrada_Min_Inclinacio' : '700', 'SS1_Sortida_Min_Inclinacio' : '5', 'SS1_Entrada_Max_Inclinacio' : '3200', 'SS1_Sortida_Max_Inclinacio' : '40', 'SS1_Limit_Orientacio_Minim' : '15', 'SS1_Limit_Orientacio_Maxim' : '344', 'SS1_Limit_Inclinacio_Minim' : '8', 'SS1_Limit_Inclinacio_Maxim' : '35', 'SS1_Start' : '0', 'SS1_Stop' : '0', 'SS2_SP_Orientacio_Man' : '0', 'SS2_SP_Inclinacio_Man' : '0', 'SS2_Manual' : '0', 'SS2_RD_Orientacio' : '0', 'SS2_RD_Inclinacio' : '0', 'SS2_Correccio' : '0', 'SS2_Entrada_Min_Orientacio' : '0', 'SS2_Sortida_Min_Orientacio' : '0', 'SS2_Entrada_Max_Orientacio' : '0', 'SS2_Sortida_Max_Orientacio' : '0', 'SS2_Entrada_Min_Inclinacio' : '0', 'SS2_Sortida_Min_Inclinacio' : '0', 'SS2_Entrada_Max_Inclinacio' : '0', 'SS2_Sortida_Max_Inclinacio' : '0', 'SS2_Limit_Orientacio_Minim' : '0', 'SS2_Limit_Orientacio_Maxim' : '0', 'SS2_Limit_Inclinacio_Minim' : '0', 'SS2_Limit_Inclinacio_Maxim' : '0', 'SS2_Start' : '0', 'SS2_Stop' : '0', 'SS3_SP_Orientacio_Man' : '0', 'SS3_SP_Inclinacio_Man' : '0', 'SS3_Manual' : '0', 'SS3_RD_Orientacio' : '12.45834', 'SS3_RD_Inclinacio' : '-5.435848', 'SS3_Correccio' : '-13', 'SS3_Entrada_Min_Orientacio' : '6800', 'SS3_Sortida_Min_Orientacio' : '88', 'SS3_Entrada_Max_Orientacio' : '32912', 'SS3_Sortida_Max_Orientacio' : '428', 'SS3_Entrada_Min_Inclinacio' : '955', 'SS3_Sortida_Min_Inclinacio' : '8', 'SS3_Entrada_Max_Inclinacio' : '3566', 'SS3_Sortida_Max_Inclinacio' : '42', 'SS3_Limit_Orientacio_Minim' : '98', 'SS3_Limit_Orientacio_Maxim' : '270', 'SS3_Limit_Inclinacio_Minim' : '11', 'SS3_Limit_Inclinacio_Maxim' : '35', 'SS3_Start' : '0', 'SS3_Stop' : '0', 'SS4_SP_Orientacio_Man' : '0', 'SS4_SP_Inclinacio_Man' : '0', 'SS4_Manual' : '0', 'SS4_RD_Orientacio' : '0', 'SS4_RD_Inclinacio' : '0', 'SS4_Correccio' : '0', 'SS4_Entrada_Min_Orientacio' : '0', 'SS4_Sortida_Min_Orientacio' : '0', 'SS4_Entrada_Max_Orientacio' : '0', 'SS4_Sortida_Max_Orientacio' : '0', 'SS4_Entrada_Min_Inclinacio' : '0', 'SS4_Sortida_Min_Inclinacio' : '0', 'SS4_Entrada_Max_Inclinacio' : '0', 'SS4_Sortida_Max_Inclinacio' : '0', 'SS4_Limit_Orientacio_Minim' : '0', 'SS4_Limit_Orientacio_Maxim' : '0', 'SS4_Limit_Inclinacio_Minim' : '0', 'SS4_Limit_Inclinacio_Maxim' : '0', 'SS4_Start' : '0', 'SS4_Stop' : '0', 'SS5_SP_Orientacio_Man' : '0', 'SS5_SP_Inclinacio_Man' : '0', 'SS5_Manual' : '0', 'SS5_RD_Orientacio' : '0', 'SS5_RD_Inclinacio' : '0', 'SS5_Correccio' : '0', 'SS5_Entrada_Min_Orientacio' : '0', 'SS5_Sortida_Min_Orientacio' : '0', 'SS5_Entrada_Max_Orientacio' : '0', 'SS5_Sortida_Max_Orientacio' : '0', 'SS5_Entrada_Min_Inclinacio' : '0', 'SS5_Sortida_Min_Inclinacio' : '0', 'SS5_Entrada_Max_Inclinacio' : '0', 'SS5_Sortida_Max_Inclinacio' : '0', 'SS5_Limit_Orientacio_Minim' : '0', 'SS5_Limit_Orientacio_Maxim' : '0', 'SS5_Limit_Inclinacio_Minim' : '0', 'SS5_Limit_Inclinacio_Maxim' : '0', 'SS5_Start' : '0', 'SS5_Stop' : '0', 'SS6_SP_Orientacio_Man' : '0', 'SS6_SP_Inclinacio_Man' : '0', 'SS6_Manual' : '0', 'SS6_RD_Orientacio' : '0', 'SS6_RD_Inclinacio' : '0', 'SS6_Correccio' : '0', 'SS6_Entrada_Min_Orientacio' : '0', 'SS6_Sortida_Min_Orientacio' : '0', 'SS6_Entrada_Max_Orientacio' : '0', 'SS6_Sortida_Max_Orientacio' : '0', 'SS6_Entrada_Min_Inclinacio' : '0', 'SS6_Sortida_Min_Inclinacio' : '0', 'SS6_Entrada_Max_Inclinacio' : '0', 'SS6_Sortida_Max_Inclinacio' : '0', 'SS6_Limit_Orientacio_Minim' : '0', 'SS6_Limit_Orientacio_Maxim' : '0', 'SS6_Limit_Inclinacio_Minim' : '0', 'SS6_Limit_Inclinacio_Maxim' : '0', 'SS6_Start' : '0', 'SS6_Stop' : '0', 'SS7_SP_Orientacio_Man' : '0', 'SS7_SP_Inclinacio_Man' : '0', 'SS7_Manual' : '0', 'SS7_RD_Orientacio' : '0', 'SS7_RD_Inclinacio' : '0', 'SS7_Correccio' : '0', 'SS7_Entrada_Min_Orientacio' : '1327.1', 'SS7_Sortida_Min_Orientacio' : '17.3', 'SS7_Entrada_Max_Orientacio' : '27300', 'SS7_Sortida_Max_Orientacio' : '355', 'SS7_Entrada_Min_Inclinacio' : '500', 'SS7_Sortida_Min_Inclinacio' : '4', 'SS7_Entrada_Max_Inclinacio' : '3800', 'SS7_Sortida_Max_Inclinacio' : '40', 'SS7_Limit_Orientacio_Minim' : '27.3', 'SS7_Limit_Orientacio_Maxim' : '345', 'SS7_Limit_Inclinacio_Minim' : '8', 'SS7_Limit_Inclinacio_Maxim' : '35', 'SS7_Start' : '0', 'SS7_Stop' : '0', 'SS8_SP_Orientacio_Man' : '0', 'SS8_SP_Inclinacio_Man' : '0', 'SS8_Manual' : '0', 'SS8_RD_Orientacio' : '0', 'SS8_RD_Inclinacio' : '0', 'SS8_Correccio' : '0', 'SS8_Entrada_Min_Orientacio' : '350', 'SS8_Sortida_Min_Orientacio' : '13', 'SS8_Entrada_Max_Orientacio' : '25263', 'SS8_Sortida_Max_Orientacio' : '354', 'SS8_Entrada_Min_Inclinacio' : '921', 'SS8_Sortida_Min_Inclinacio' : '4', 'SS8_Entrada_Max_Inclinacio' : '3276', 'SS8_Sortida_Max_Inclinacio' : '40', 'SS8_Limit_Orientacio_Minim' : '23', 'SS8_Limit_Orientacio_Maxim' : '344', 'SS8_Limit_Inclinacio_Minim' : '8', 'SS8_Limit_Inclinacio_Maxim' : '35', 'SS8_Start' : '0', 'SS8_Stop' : '0', 'SS9_SP_Orientacio_Man' : '0', 'SS9_SP_Inclinacio_Man' : '0', 'SS9_Manual' : '0', 'SS9_RD_Orientacio' : '0', 'SS9_RD_Inclinacio' : '0', 'SS9_Correccio' : '0', 'SS9_Entrada_Min_Orientacio' : '887', 'SS9_Sortida_Min_Orientacio' : '12', 'SS9_Entrada_Max_Orientacio' : '26500', 'SS9_Sortida_Max_Orientacio' : '350', 'SS9_Entrada_Min_Inclinacio' : '580', 'SS9_Sortida_Min_Inclinacio' : '4', 'SS9_Entrada_Max_Inclinacio' : '3500', 'SS9_Sortida_Max_Inclinacio' : '44', 'SS9_Limit_Orientacio_Minim' : '22', 'SS9_Limit_Orientacio_Maxim' : '340', 'SS9_Limit_Inclinacio_Minim' : '8', 'SS9_Limit_Inclinacio_Maxim' : '38', 'SS9_Start' : '0', 'SS9_Stop' : '0', };
  }
}
