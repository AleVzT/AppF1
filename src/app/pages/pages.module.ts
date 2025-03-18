import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgChartsModule  } from 'ng2-charts';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component'
import { TeamListComponent } from './team-list/team-list.component';
import { PilotListComponent } from './pilot-list/pilot-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormatDateDirective } from '../directives/format-date.directive';


// Módulos de Ng-Zorro
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { HighlightTitleDirective } from '../directives/highlight-title.directive';
import { CapitalizePipe } from '../pipes/capitalize.pipe';
import { PointsPipe } from '../pipes/points.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    TeamListComponent,
    PilotListComponent,
    DashboardComponent,
    FormatDateDirective,
    HighlightTitleDirective,
    CapitalizePipe,
    PointsPipe,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    NgChartsModule,

    NzCardModule,
    NzTableModule,
    NzInputModule,
    NzSelectModule,
  ],
  providers: [DatePipe],
})
export class PagesModule { }
