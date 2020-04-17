import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TabComponent } from './tabs/tab.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    TabComponent
  ],
  exports: [
    TabComponent
  ],
  providers: []
})
export class SharedModule {}
