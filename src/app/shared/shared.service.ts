import { Injectable } from '@angular/core';
import { SeguidorField, Seguidor } from '../seguidorField.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  seguidorMostrar: Seguidor;
  dades_seguidors: SeguidorField;
  private subject = new Subject<any>();
  constructor() { }

  setDadesSegudidors(dades){
    this.dades_seguidors=dades
  }

  getDadesSegudiors(){
    return this.dades_seguidors
  }

  setSeguidor(dades){
    this.seguidorMostrar=dades
  }
  getSeguidor(){
    return this.seguidorMostrar
  }

  sendClickEvent(){
    this.subject.next();
  }

  getClickEvent():Observable<any>{
    return this.subject.asObservable();
  }
}
