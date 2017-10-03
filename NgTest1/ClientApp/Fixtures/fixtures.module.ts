import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { FixturesComponent } from './fixturesComponent/fixtures.component';
import { FixturesNavbarComponent } from './fixtures-navbar/fixtures-navbar.component'
import { CurrentComponent } from './current/current.component';
import { RoundComponent } from './round/round.component';
import { DetailsComponent } from './details/details.component';

const FixtureRoutes: Routes = [
  { 
      path: 'fixtures',  
      component: FixturesComponent, 
      children: [
          { path: 'round', component: RoundComponent },
          { path: 'details', component: DetailsComponent },
          { path: '', component: CurrentComponent }
      ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FixtureRoutes)
  ],
  declarations: [
    FixturesComponent,
    FixturesNavbarComponent,
    CurrentComponent, 
    RoundComponent, 
    DetailsComponent]
})
export class FixturesModule { }
