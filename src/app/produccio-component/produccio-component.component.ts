import { Component, OnInit, NgModule } from '@angular/core';
import { SeguidorField, Seguidor } from '../seguidorField.model';
import { SharedService } from '../shared/shared.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-produccio-component',
  templateUrl: './produccio-component.component.html',
  styleUrls: ['./produccio-component.component.css'],
  host: {'(window:resize)':'onWindowResize($event)'}
})
export class ProduccioComponentComponent implements OnInit {

  clickEventSubscription:Subscription;
  potencia1: number = 0.0;
  potencia2: number = 0.0;

  single: any[]=[{"name": "Inv. 1", "value": this.potencia1},{"name": "Inv. 2", "value": this.potencia2}];
  view: any[] = [345, 323];
  view1: any[] = [345, 323];
  view2: any[] = [228, 254];
  view3: any[] = [192, 228];
  view4: any[] = [149, 223];
  view5: any[] = [120, 193];
  view6: any[] = [110, 180];
  view7: any[] = [300, 275];
  legend: boolean = true;
  legendPosition: string = 'above';

  width: number = window.innerWidth;
  maxmobileWidth: number  = 1219;
  maxmobileWidth2: number  = 1000;
  minmobileWidth: number  = 807;
  minmobileWidth2: number  = 650;
  minmobileWidth3: number  = 549;
  minmobileWidth4: number  = 455;
  minmobileWidth5: number  = 360;


  mirarMida() {
      if (this.width >= this.maxmobileWidth) {
          this.view = this.view1;
      } else if (this.width <= this.maxmobileWidth && this.width >= this.maxmobileWidth2) {
          this.view = this.view7;
      }else if (this.width <= this.maxmobileWidth2 && this.width >= this.minmobileWidth) {
          this.view = this.view2;
      } else if (this.width <= this.minmobileWidth && this.width >= this.minmobileWidth2) {
          this.view = this.view3;
      } else if (this.width <= this.minmobileWidth2 && this.width >= this.minmobileWidth3) {
          this.view = this.view4;
      } else if (this.width <= this.minmobileWidth3 && this.width >= this.minmobileWidth4) {
          this.view = this.view4;
      } else if (this.width <= this.minmobileWidth4 && this.width >= this.minmobileWidth5) {
          this.view = this.view5;
      }else if (this.width <= this.minmobileWidth5) {
          this.view = this.view6;
      }
  }
  seguidorRebut:Seguidor;


  colorScheme = {
    domain: ['#39FF33', '#39FF33']
  };

  constructor(private shared:SharedService) {
      this.clickEventSubscription = this.shared.getClickEvent().subscribe(()=>{
        this.update();
      })
  }

  update() {
       this.ngOnInit();
  } 

  ngOnInit(): void {
      this.width= document.body.clientWidth;
      this.mirarMida();
      this.seguidorRebut = this.shared.getSeguidor();
      setTimeout(() => {  this.potencia2=this.seguidorRebut.potenciaInv2/1000; }, 100);
      setTimeout(() => {  this.potencia1=this.seguidorRebut.potenciaInv1/1000; }, 100);
      setTimeout(() => {  this.single=[{"name": "Inv. 1", "value": this.potencia1},{"name": "Inv. 2", "value": this.potencia2}];; }, 100);
      setTimeout(() => {  Object.assign(this.single); }, 100);
      setTimeout(() => {  console.log(this.seguidorRebut); }, 100);
      
      
      
  }

 gaugeValueFormatting = (value) => {
        if(value <= 0){
            return ``
        } else{
          return value
        }
        
    };

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  onWindowResize(event) {
      this.width = event.target.innerWidth;
      if (this.width >= this.maxmobileWidth) {
          this.view = this.view1;
      } else if (this.width <= this.maxmobileWidth && this.width >= this.maxmobileWidth2) {
          this.view = this.view7;
      }else if (this.width <= this.maxmobileWidth2 && this.width >= this.minmobileWidth) {
          this.view = this.view2;
      } else if (this.width <= this.minmobileWidth && this.width >= this.minmobileWidth2) {
          this.view = this.view3;
      } else if (this.width <= this.minmobileWidth2 && this.width >= this.minmobileWidth3) {
          this.view = this.view4;
      } else if (this.width <= this.minmobileWidth3 && this.width >= this.minmobileWidth4) {
          this.view = this.view4;
      } else if (this.width <= this.minmobileWidth4 && this.width >= this.minmobileWidth5) {
          this.view = this.view5;
      }else if (this.width <= this.minmobileWidth5) {
          this.view = this.view6;
      }
  }

}
