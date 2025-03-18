import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TeamListComponent} from './team-list/team-list.component';
import { PilotListComponent } from './pilot-list/pilot-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'team', component: TeamListComponent },
  { path: 'pilot', component: PilotListComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: '', redirectTo: '/pages/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
