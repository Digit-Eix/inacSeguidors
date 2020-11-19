import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { SeguidorField, Seguidor } from '../seguidorField.model';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-configuracio-placa',
  templateUrl: './configuracio-placa.component.html',
  styleUrls: ['./configuracio-placa.component.css']
})
export class ConfiguracioPlacaComponent implements OnInit {

  title  = 'Huerta Solar Ballesteros';

  checkoutForm;
  seguidorRebut:Seguidor;

  constructor(private router:Router, private formBuilder: FormBuilder, private shared:SharedService) {
    this.checkoutForm = this.formBuilder.group({
        Limit_Orientacio_Maxim: '',
        Limit_Orientacio_Minim: '',
        Entrada_Max_Orient: '',
        Entrada_Min_Orient: '',
        Sortida_Max_Orient: '',
        Sortida_Min_Orient: '',
        Limit_Inclinacio_Maxim: '',
        Limit_Inclinacio_Minim: '',
        Entrada_Max_Incl: '',
        Entrada_Min_Incl: '',
        Sortida_Max_Incl: '',
        Sortida_Min_Incl: '',
      });
  }

  ngOnInit(): void {
      this.seguidorRebut = this.shared.getSeguidor();
  }

  onSubmit(customerData) {
    //this.checkoutForm.reset();
    console.warn('Your order has been submitted', customerData);
  }

  gotoList() {
      this.router.navigate(['/']);
   }

}
