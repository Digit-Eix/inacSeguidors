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

  constructor(config: NgbProgressbarConfig) {

    /*Substituir per valor màxim possible*/
    config.max = 110;
    config.striped = true;
    config.animated = true;
    config.type = 'success';
    config.height = '50px';
    config.textType= 'dark';
  }

  ngOnInit(): void {
  }

}
