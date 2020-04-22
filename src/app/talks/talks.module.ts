import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ApiModule } from '../api/api.module';
import { TalksComponent } from './talks.component';
import { TalkFilterComponent } from './talk-filter/talk-filter.component';
import { TalkCardComponent } from './talk-card/talk-card.component';

const routes: Routes = [
  { path: '', component: TalksComponent }
];

@NgModule({
  declarations: [
    TalksComponent,
    TalkFilterComponent,
    TalkCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ApiModule,
    RouterModule.forChild(routes)
  ],
  providers: []
})
export class TalksModule {}
