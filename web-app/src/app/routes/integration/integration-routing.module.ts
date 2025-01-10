import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DataVinesDashboardComponent } from './data-vines/data-vines.component';
import { GrafanaComponent } from './grafana/grafana.component';
import { IMonitoringComponent } from './imonitoring/i-monitoring.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'data-vines',
    component: DataVinesDashboardComponent
  },
  {
    path: 'grafana',
    component: GrafanaComponent
  },
  {
    path: 'i-monitoring',
    component: IMonitoringComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntegrationRoutingModule {}
