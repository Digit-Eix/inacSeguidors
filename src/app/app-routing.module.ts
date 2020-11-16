import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfiguracioPlacaComponent } from '../app/configuracio-placa/configuracio-placa.component';


const routes: Routes = [
    {path:'ConfiguracioPlaca', component: ConfiguracioPlacaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
