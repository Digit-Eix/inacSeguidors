import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfiguracioPlacaComponent } from '../app/configuracio-placa/configuracio-placa.component';
import { SeguidorCardComponent } from '../app/seguidor-card/seguidor-card.component';
import { ConfiguracioGeneralComponent } from '../app/configuracio-general/configuracio-general.component';


const routes: Routes = [
    {path: '', component: SeguidorCardComponent},
    {path: 'ConfiguracioPlaca', component: ConfiguracioPlacaComponent},
    {path: 'ConfiguracioGeneral', component: ConfiguracioGeneralComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
