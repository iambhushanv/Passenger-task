import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassengerDashboardComponent } from './passenger-dashboard/passenger-dashboard.component';
import { PassengerCountComponent } from './passenger-count/passenger-count.component';
import { MatButtonModule } from "@angular/material/button";
import { PassengerCardComponent } from './passenger-card/passenger-card.component';
import { MaterialModule } from '../material/material.module';
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { GetConfirmComponent } from './passenger-card/get-confirm/get-confirm.component';



@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerCardComponent,
    GetConfirmComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MaterialModule,
    MatCardModule,
    MatDividerModule
],
  exports : [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerCardComponent
  ]
})
export class PassengerModule { }
