import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { VISIBILITY_FILTER, TalkFilter } from './filter.model';

@Component({
  selector: 'app-talk-filter',
  templateUrl: './talk-filter.component.html',
  styleUrls: ['./talk-filter.component.scss']
})
export class TalkFilterComponent {
  @Input() active: VISIBILITY_FILTER;
  @Input() filters: TalkFilter[];
  @Output() update = new EventEmitter<VISIBILITY_FILTER>();

  constructor() { }
}
