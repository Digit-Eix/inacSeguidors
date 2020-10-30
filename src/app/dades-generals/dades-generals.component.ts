import { Component, Input, OnInit } from '@angular/core';
import { SeguidorField } from '../seguidorField.model';

@Component({
  selector: 'app-dades-generals',
  templateUrl: './dades-generals.component.html',
  styleUrls: ['./dades-generals.component.css']
})

export class DadesGeneralsComponent implements OnInit {
  @Input() seguidor: SeguidorField;
  constructor() {
   }

  ngOnInit(): void {
    console.log(this.seguidor);
  }

}
