import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeguidorField, Seguidor } from '../seguidorField.model';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-configuracio-general',
  templateUrl: './configuracio-general.component.html',
  styleUrls: ['./configuracio-general.component.css']
})
export class ConfiguracioGeneralComponent implements OnInit {

  title  = 'Huerta Solar Ballesteros';
  seguidorFieldRebut: SeguidorField = new SeguidorField();
  zoom = 10
  center: google.maps.LatLngLiteral
  options: google.maps.MapOptions = {
      fullscreenControl: false,
      mapTypeId: 'roadmap',
      zoomControl: false,
      scrollwheel: false,
      disableDoubleClickZoom: false,
      maxZoom: 15,
      minZoom: 8,
  };

  markers = []

  addMarker() {
    this.markers.push({
      position: {
        lat: parseFloat(this.seguidorFieldRebut.latitud+"000"),
        lng: parseFloat(this.seguidorFieldRebut.longitud+"000"),
      },
      label: {
        color: 'black',
        text: ' ',
      },
    })
  }


  constructor(private router:Router, private shared:SharedService) { }

  ngOnInit(): void {
      this.seguidorFieldRebut = this.shared.getDadesSegudiors();
      console.log(this.seguidorFieldRebut);
      navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: parseFloat(this.seguidorFieldRebut.latitud+"000"),
        lng: parseFloat(this.seguidorFieldRebut.longitud+"000"),
      }
    })
    this.addMarker();
  }

  gotoList() {
      this.router.navigate(['/']);
   }

}
