import { Component, OnInit, Input } from '@angular/core';
import { SeguidorField, Seguidor } from '../seguidorField.model';

@Component({
  selector: 'app-seguidor-orientacio',
  templateUrl: './seguidor-orientacio.component.html',
  styleUrls: ['./seguidor-orientacio.component.css']
})
export class SeguidorOrientacioComponent implements OnInit {

  @Input() seguidorField: number;

    gaugeType = 'arch';
    gaugeSize = 250;
    gaugeMinValue = 5;
    gaugeMaxValue = 355;
    gaugeStyle = 'round';
    gaugeThicknes = 15;
    // gaugeLabel = 'Orientación';
    gaugeLabel = '';
    gaugeAppendText = '';
    gaugeAnim = true;
    color = '#ffa828';
  constructor() { }

  ngOnInit(): void {
  }

}
