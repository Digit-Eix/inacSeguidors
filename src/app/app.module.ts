import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeguidorCardComponent } from './seguidor-card/seguidor-card.component';
import { CalendarCardComponent } from './calendar-card/calendar-card.component';
import { DadesGeneralsComponent } from './dades-generals/dades-generals.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgxGaugeModule } from 'ngx-gauge';
import { SeguidorOrientacioComponent } from './seguidor-orientacio/seguidor-orientacio.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ProduccioComponentComponent } from './produccio-component/produccio-component.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [
    AppComponent,
    SeguidorCardComponent,
    CalendarCardComponent,
    DadesGeneralsComponent,
    SeguidorOrientacioComponent,
    ProgressBarComponent,
    ProduccioComponentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatIconModule,
    HttpClientModule,
    NgxGaugeModule,
    NgxChartsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
