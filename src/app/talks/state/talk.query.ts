import { Injectable } from '@angular/core';
import { Order, QueryConfig, QueryEntity } from '@datorama/akita';
import { combineLatest } from 'rxjs';
import { isAfter, isBefore } from 'date-fns';
import { TalkState, TalkStore } from './talk.store';
import { Talk } from './talk.model';
import { VISIBILITY_FILTER } from '../talk-filter/filter.model';

@Injectable({ providedIn: 'root' })
@QueryConfig({
  sortBy: 'date',
  sortByOrder: Order.DESC
})
export class TalkQuery extends QueryEntity<TalkState, Talk> {
  selectTalkFilter$ = this.select(state => state.filter);

  selectVisibleTalks$ = combineLatest(
    this.selectTalkFilter$,
    this.selectAll(),
    this.getVisibleTalks
  );

  constructor(protected talkStore: TalkStore) {
    super(talkStore);
  }

  private getVisibleTalks(filter, talks): Talk[] {
    switch (filter) {
      case VISIBILITY_FILTER.SHOW_UPCOMING:
        return talks.filter(talk => isAfter(new Date(talk.date), new Date()));
      case VISIBILITY_FILTER.SHOW_PAST:
        return talks.filter(talk => isBefore(new Date(talk.date), new Date()));
    }
  }
}
