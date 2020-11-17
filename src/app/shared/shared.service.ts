import { Injectable } from '@angular/core';
import { SeguidorField, Seguidor } from '../seguidorField.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  seguidorMostrar: Seguidor;
  private subject = new Subject<any>();
  constructor() { }

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
