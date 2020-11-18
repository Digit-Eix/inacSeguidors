import { Component, OnInit } from '@angular/core';
import {NgbProgressbarConfig} from '@ng-bootstrap/ng-bootstrap';
import { SeguidorField, Seguidor } from '../seguidorField.model';
import { SharedService } from '../shared/shared.service';


@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  seguidorFieldRebut: SeguidorField = new SeguidorField();
  produccioTotalAcumulada: number;

  constructor(config: NgbProgressbarConfig, private shared:SharedService) {

    /*Substituir per valor màxim possible*/
    config.max = 1100;
    config.striped = true;
    config.animated = true;
    config.type = 'success';
    config.height = '50px';
    config.textType= 'dark';
  }

  ngOnInit(): void {
      this.seguidorFieldRebut = this.shared.getDadesSegudiors();
      this.produccioTotalAcumulada = 0;
      for (let i = 0; i < this.seguidorFieldRebut.seguidors.length; i++) {
          this.produccioTotalAcumulada = this.produccioTotalAcumulada + this.seguidorFieldRebut.seguidors[i].potenciaDiariaInv1;
          this.produccioTotalAcumulada = this.produccioTotalAcumulada + this.seguidorFieldRebut.seguidors[i].potenciaDiariaInv2;
          
      }
  }

}
