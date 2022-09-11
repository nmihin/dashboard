import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard01Component } from './dashboard01/dashboard01.component';
import { Dashboard02Component } from './dashboard02/dashboard02.component';
import { DashboardPaymentOverviewComponent } from './payment-overview/payment-overview.component';
import { DashboardPerformanceOverviewComponent } from './performance-overview/performance-overview.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard01',
        component: Dashboard01Component
      },
      {
        path: 'dashboard02',
        component: Dashboard02Component
      },
      {
        path: 'payment-overview',
        component: DashboardPaymentOverviewComponent
      },
      {
        path: 'performance-overview',
        component: DashboardPerformanceOverviewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
