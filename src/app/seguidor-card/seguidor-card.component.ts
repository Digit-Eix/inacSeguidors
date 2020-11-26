import { Component, OnInit } from '@angular/core';
import { SeguidorField, Seguidor } from '../seguidorField.model';
import { getTestBed } from '@angular/core/testing';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { SharedService } from '../shared/shared.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService } from "../shared/services/auth.service";

@Component({
  selector: 'app-seguidor-card',
  templateUrl: './seguidor-card.component.html',
  styleUrls: ['./seguidor-card.component.css']
})
export class SeguidorCardComponent implements OnInit {
  loading: boolean = true;
  seguidorField: SeguidorField = new SeguidorField();
  title  = 'Huerta Solar Ballesteros';
  temp: Seguidor = new Seguidor();
  login_state: boolean = false;
  // rData: any = this.getSeguidorData();
  // rData: any = {};
  segNum: number;
  // seguidorDataUrl ='https://vpn-v2.myrex24.net/ProvaOficina20201013@inacsl/web/webserver';

  seguidorDataUrl = './assets/seguidorData.json';

  //seguidorDataUrl = 'http://inac.digiteix.info/getSeguidorData.php';
    
  seguidorEnviar: Seguidor;
  eventText = '';

  // inici codi per mostrar el boto en Auto o Manual
  onClickMe() {
    if (this.seguidorField.seguidors[this.segNum].manual == 1){
      this.seguidorField.seguidors[this.segNum].manual = 0;
      //fa falta modificar la dada al plc/servidor
    } else{
      this.seguidorField.seguidors[this.segNum].manual = 1;
      //fa falta modificar la dada al plc/servidor
    }
  }
   // fi codi per mostrar el boto en Auto o Manual

   // inici codi per detectar el moviment de sipe
   direction = ""; 
  
  onSwipe(event) { 
 const x = 
   Math.abs( 
      event.deltaX) > 40 ? (event.deltaX > 0 ? "Right" : "Left") : ""; 
 const y = 
   Math.abs( 
      event.deltaY) > 40 ? (event.deltaY > 0 ? "Down" : "Up") : ""; 
    if(x=="Right"){
        this.nextSeg();
    } else if(x=="Left"){
        this.prevSeg();
    }
  }
   // fi codi per detectar el moviment de sipe

   // inici codi login

  email: string;
  password: string;
  
  login() {
    this.authService.SignIn(this.email, this.password);
    setTimeout(() => { this.checkUser() }, 1000);
    
  }

  checkUser(){
    const user = JSON.parse(localStorage.getItem('user'));
    if(user !== null){
        this.login_state=false;
    }
  }

  logout(){
    this.authService.SignOut();
    this.login_state=false;
  }

  gotoMain(){
    this.login_state=false;
  }
   // fi codi login
   
   // inici codi botons canvi de pantalla
   gotoList() {
      if(this.authService.isLoggedIn !== true) {
      this.login_state=true;
    }else{
      this.router.navigate(['/ConfiguracioPlaca']);
    }     
   }

   gotoConfig(){
      if(this.authService.isLoggedIn !== true) {
      this.login_state=true;
    }else{
      this.router.navigate(['/ConfiguracioGeneral']);
    }
   }

   gotoLogin(){
      this.login_state=true;
   }
   // fi codi botons canvi de pantalla

   // inici codi boto rescarregar dades
   restartDades(){
      this.ngOnInit();
   }
   // fi codi boto rescarregar dades

   constructor(private _http: HttpClient, private router: Router, private shared: SharedService, public authService: AuthService) {
   }
  ngOnInit() {
  this.loading = true;
  console.log('ngOnInit');
  this.getSeguidorDataHttp().subscribe(data => {
      console.log('Dades PLC', data);
      this.seguidorFieldDataMap(data);
      console.log(this.loading);
      this.seguidorEnviar = this.seguidorField.seguidors[this.segNum];
      this.shared.setSeguidor(this.seguidorEnviar);
      this.shared.setDadesSegudidors(this.seguidorField);
      this.loading = false;
      console.log(this.loading);
     });
  this.segNum = 0;
  console.log('call to server finalizado');
  }
  seguidorFieldDataMap(data: any) {
    this.seguidorField.spOrientacio = data.SP_Orientacio;
    this.seguidorField.spInclinacio = data.SP_Inclinacio;
    this.seguidorField.rdOrientacioGeneral = data.RD_Orientacio_General;
    this.seguidorField.rdInclinacioGeneral = data.RD_Inclinacio_General;
    this.seguidorField.estatGeneral = data.Estat_General;
    this.seguidorField.ssGeneral = data.SS_General;
    this.seguidorField.alarmesGeneral = data.Alarmes_General;
    this.seguidorField.ventActual = data.Vent_Actual;
    this.seguidorField.velocitatMaximaVent = data.Velocitat_Maxima_Vent;
    this.seguidorField.alarmaVent = data.Alarma_Vent;
    this.seguidorField.rearmeAlarmes = data.Rearme_Alarmes;
    this.seguidorField.ventMaximHistoric = data.Vent_Maxim_Historic;
    this.seguidorField.dtlMaxVent = data.DTL_Max_Vent;
    this.seguidorField.latitud = data.Latitud;
    this.seguidorField.longitud = data.Longitud;

    this.seguidorField.sunrise = '6:58 am';
    this.seguidorField.sunset = '11:40 pm';
    this.seguidorField.date = 'Tue, 01 May 2018 06:00 PM CEST';
    // console.log(data);
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
       ['potenciaInv2', 'Potencia_Inv2'],
       ['potenciaDiariaInv1', 'Potencia_Diaria_Inv1'],
       ['potenciaDiariaInv2', 'Potencia_Diaria_Inv2']
      ];
      vars.forEach(v => {
        temp[v[0]] = data[`SS${i}_${v[1]}`];
      });
      this.seguidorField.seguidors.push(temp);
    }
  }
  nextSeg() {
    console.log('nextSeg');
    this.segNum++;
    this.segNum = this.segNum % this.seguidorField.seguidors.length;
    this.seguidorEnviar = this.seguidorField.seguidors[this.segNum];
    this.shared.setSeguidor(this.seguidorEnviar);
    setTimeout(() => {  this.shared.sendClickEvent(); }, 100);
  }
  prevSeg() {
    console.log('prevSeg');
    this.segNum--;
    this.segNum = ((this.segNum + this.seguidorField.seguidors.length)
          % this.seguidorField.seguidors.length)
          % this.seguidorField.seguidors.length;
    this.seguidorEnviar = this.seguidorField.seguidors[this.segNum];
    this.shared.setSeguidor(this.seguidorEnviar);
    setTimeout(() => {  this.shared.sendClickEvent(); }, 100);
  }
  getSeguidorDataHttp() {
    const headers = new HttpHeaders({
       'Access-Control-Allow-Origin': '*',
       'Access-Control-Request-Headers': 'origin, x-requested-with, accept'
     });
    // return this._http.get(url, {headers});
    const url = `${this.seguidorDataUrl}`;
    console.log(headers);
    return this._http.get(url, {headers});
  }
}
