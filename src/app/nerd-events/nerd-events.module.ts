import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ApiModule } from '../api/api.module';
import { NerdEventsComponent } from './nerd-events.component';

const routes: Routes = [
  { path: '', component: NerdEventsComponent }
];

@NgModule({
  declarations: [
    NerdEventsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ApiModule,
    RouterModule.forChild(routes)
  ],
  providers: []
})
export class NerdEventsModule {}
