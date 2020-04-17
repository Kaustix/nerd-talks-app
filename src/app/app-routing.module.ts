import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'talks',
    pathMatch: 'full'
  },
  {
    path: 'talks',
    loadChildren: () => import('./talks/talks.module').then(m => m.TalksModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
