import { Component, OnInit, Input } from '@angular/core';
import { SeguidorField, Seguidor } from '../seguidorField.model';

@Component({
  selector: 'app-seguidor-orientacio',
  templateUrl: './seguidor-orientacio.component.html',
  styleUrls: ['./seguidor-orientacio.component.css'],
    host: {
    "(window:resize)":"onWindowResize($event)"
  }
})
export class SeguidorOrientacioComponent implements OnInit {

  @Input() seguidorField: number;
  @Input() size: number;
  name = 'Angular';
  width:number = window.innerWidth;
  minmobileWidth:number  = 767;
  maxmobileWidth:number  = 991;

    gaugeType = 'arch';
    gaugeSize = 250;
    gaugeMinValue = 0;
    gaugeMaxValue = 360;
    gaugeStyle = "round";
    gaugeThicknes = 15;
<<<<<<< Updated upstream
    gaugeLabel = 'Orientación';
=======
    gaugeLabel = '';
>>>>>>> Stashed changes
    gaugeAppendText = '';
    gaugeAnim = true;
    color = "#ffa828";

  constructor() { }

  ngOnInit() : void {
  }


    onWindowResize(event) {
      this.width = event.target.innerWidth;
      if(this.width<=this.maxmobileWidth && this.width >=this.minmobileWidth){
        this.size = 200;
      }else if(this.width <= this.minmobileWidth){
        this.size = 100;
      }else if(this.width >= this.maxmobileWidth){
        this.size = 250;
      }
      
  }

}


  

  
