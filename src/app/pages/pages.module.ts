import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgChartsModule  } from 'ng2-charts';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component'
import { TeamListComponent } from './team-list/team-list.component';
import { PilotListComponent } from './pilot-list/pilot-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchPilotsComponent } from './search-pilots/search-pilots.component';
import { FormatDateDirective, HighlightTitleDirective } from '../directives';
import { CapitalizePipe, PointsPipe } from '../pipes';

// Módulos de Ng-Zorro
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzEmptyModule } from 'ng-zorro-antd/empty';

@NgModule({
  declarations: [
    HomeComponent,
    TeamListComponent,
    PilotListComponent,
    DashboardComponent,
    SearchPilotsComponent,

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
    NzSpinModule,
    NzEmptyModule,
  ],
  providers: [DatePipe],
})
export class PagesModule { }
