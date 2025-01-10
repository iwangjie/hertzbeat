import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IntegrationRoutingModule } from './integration-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataVinesDashboardComponent } from './data-vines/data-vines.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    IntegrationRoutingModule,
    DashboardComponent,
  ]
})
export class IntegrationModule { }
