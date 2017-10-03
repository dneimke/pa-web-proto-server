import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ReportsComponent } from './reportsComponent/reports.component';
import { ReportsNavbarComponent } from './reports-navbar/reports-navbar.component';
import { FixtureAnomaliesComponent } from './fixture-anomalies/fixture-anomalies.component';
import { FixtureChangesComponent } from './fixture-changes/fixture-changes.component';
import { FixtureCompletionComponent } from './fixture-completion/fixture-completion.component';
import { ReportDefaultComponent } from './report-default/report-default.component'; 
import { FixtureLocationComponent } from './fixture-location/fixture-location.component';
import { ResultsPendingComponent } from './results-pending/results-pending.component';


const ReportRoutes: Routes = [
  { 
      path: 'reports',  
      component: ReportsComponent, 
      children: [
          { path: 'fixtures/location', component: FixtureLocationComponent },
          { path: 'fixtures/results/pending', component: ResultsPendingComponent },
          { path: 'fixtures/anomalies', component: FixtureAnomaliesComponent },
          { path: 'fixtures/change', component: FixtureChangesComponent },
          { path: 'fixtures/completion', component: FixtureCompletionComponent },
          { path: '', component: ReportDefaultComponent }
      ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ReportRoutes)
  ],
  declarations: [
    ReportsComponent,
    ReportsNavbarComponent, 
    FixtureLocationComponent, 
    ResultsPendingComponent, 
    FixtureAnomaliesComponent, 
    FixtureChangesComponent, 
    FixtureCompletionComponent, 
    ReportDefaultComponent
  ]
})
export class ReportsModule { }
