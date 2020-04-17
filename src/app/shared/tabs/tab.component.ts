import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent {
  @Input() public title: string;
  @Input() public isActive: boolean;
  @Output() public selected: EventEmitter<any> = new EventEmitter();
}
