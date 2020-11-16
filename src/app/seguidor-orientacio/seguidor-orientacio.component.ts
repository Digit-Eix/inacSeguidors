import { Component, OnInit, Input } from '@angular/core';
import { SeguidorField, Seguidor } from '../seguidorField.model';

@Component({
  selector: 'app-seguidor-orientacio',
  templateUrl: './seguidor-orientacio.component.html',
  styleUrls: ['./seguidor-orientacio.component.css'],
    host: {'(window:resize)':'onWindowResize($event)'}
})
export class SeguidorOrientacioComponent implements OnInit {

  @Input() seguidorField: number;
  @Input() size: number;
  name = 'Angular';
  width: number = window.innerWidth;
  maxmobileWidth: number  = 991;
  minmobileWidth: number  = 682;
  minmobileWidth2: number  = 535;
  minmobileWidth3: number  = 400;
  minmobileWidth4: number  = 342;

  mirarMida() {
      if (this.width >= this.maxmobileWidth) {
        this.size = 250;
        this.gaugeThicknes=15;
      } else if (this.width <= this.maxmobileWidth && this.width >= this.minmobileWidth) {
        this.size = 200;
        this.gaugeThicknes=15;
      } else if (this.width <= this.minmobileWidth && this.width >= this.minmobileWidth2) {
        this.size = 150;
        this.gaugeThicknes=15;
      } else if (this.width <= this.minmobileWidth2 && this.width >= this.minmobileWidth3) {
        this.size = 125;
        this.gaugeThicknes=15;
      }else if (this.width <= this.minmobileWidth3 && this.width >= this.minmobileWidth4) {
        this.size = 100;
        this.gaugeThicknes=10;
      }else if (this.width <= this.minmobileWidth4) {
        this.size = 75;
        this.gaugeThicknes=10;
      }
  }


   gaugeType = 'arch';
   gaugeSize = 0;
   gaugeMinValue = 5;
   gaugeMaxValue = 355;
   gaugeStyle = 'round';
   gaugeThicknes = 15;
   gaugeAppendText = '';
   gaugeLabel ='';
   gaugeAnim = true;
   color = '#ffa828';

   onWindowResize(event) {
      this.width = event.target.innerWidth;
      if (this.width >= this.maxmobileWidth) {
        this.size = 250;
        this.gaugeThicknes=15;
      } else if (this.width <= this.maxmobileWidth && this.width >= this.minmobileWidth) {
        this.size = 200;
        this.gaugeThicknes=15;
      } else if (this.width <= this.minmobileWidth && this.width >= this.minmobileWidth2) {
        this.size = 150;
        this.gaugeThicknes=15;
      } else if (this.width <= this.minmobileWidth2 && this.width >= this.minmobileWidth3) {
        this.size = 125;
        this.gaugeThicknes=15;
      }else if (this.width <= this.minmobileWidth3 && this.width >= this.minmobileWidth4) {
        this.size = 100;
        this.gaugeThicknes=10;
      }else if (this.width <= this.minmobileWidth4) {
        this.size = 75;
        this.gaugeThicknes=10;
      }
  }


  constructor() { }

  ngOnInit(): void {
      this.width= document.body.clientWidth;
      this.mirarMida();
  }
}
