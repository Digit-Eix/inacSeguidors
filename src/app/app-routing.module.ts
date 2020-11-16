import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfiguracioPlacaComponent } from '../app/configuracio-placa/configuracio-placa.component';
import { SeguidorCardComponent } from '../app/seguidor-card/seguidor-card.component';


const routes: Routes = [
    { path: '',     component: SeguidorCardComponent},
    {path:'ConfiguracioPlaca', component: ConfiguracioPlacaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
