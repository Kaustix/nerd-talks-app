import { Injectable } from '@angular/core';
import { TalkStore } from './talk.store';
import { NerdTalksApi } from '../../api/nerd-talks.api';
import { VISIBILITY_FILTER } from '../talk-filter/filter.model';

@Injectable({ providedIn: 'root' })
export class TalkService {
  constructor(
    private talkStore: TalkStore,
    private nerdTalksApi: NerdTalksApi
    ) {}

  getTalks() {
    this.nerdTalksApi
      .getAllTalks()
      .subscribe(talks => this.talkStore.set(talks));
  }

  updateFilter(filter: VISIBILITY_FILTER) {
    this.talkStore.update(state => { state.filter = filter; });
  }
}
