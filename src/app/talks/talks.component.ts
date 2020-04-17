import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TalkQuery } from './state/talk.query';
import { TalkService } from './state/talk.service';
import { Talk } from './state/talk.model';
import { VISIBILITY_FILTER, talkFilters, TalkFilter } from './talk-filter/filter.model';

@Component({
  selector: 'app-talks',
  templateUrl: './talks.component.html',
  styleUrls: ['./talks.component.scss']
})
export class TalksComponent implements OnInit {
  talks$: Observable<Talk[]>;
  activeFilter$: Observable<VISIBILITY_FILTER>;
  filters: TalkFilter[] = talkFilters;

  constructor(
    private talkQuery: TalkQuery,
    private talkService: TalkService
  ) {}

  ngOnInit() {
    this.talkService.getTalks();
    this.talks$ = this.talkQuery.selectVisibleTalks$;
    this.activeFilter$ = this.talkQuery.selectTalkFilter$;
  }

  changeFilter(filter: VISIBILITY_FILTER) {
    this.talkService.updateFilter(filter);
  }
}
