import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TabComponent } from './tab/tab.component';
import { VerticalTabsComponent } from './tab/vertical-tabs.component';
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    TabComponent,
    VerticalTabsComponent,
    CardComponent
  ],
  exports: [
    TabComponent,
    VerticalTabsComponent,
    CardComponent
  ],
  providers: []
})
export class SharedModule {}
