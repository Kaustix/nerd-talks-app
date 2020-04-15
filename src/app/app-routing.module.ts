import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NerdEventsComponent } from './nerd-events/nerd-events.component';

const routes: Routes = [
  { path: 'events', component: NerdEventsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
