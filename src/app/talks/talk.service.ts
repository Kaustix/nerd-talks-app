import { Injectable } from '@angular/core';
import { TalkStore } from './talk.store';
import { NerdTalksApi } from '../api/nerd-talks.api';

@Injectable({ providedIn: 'root' })
export class TalkService {
  constructor(
    private nerdEventStore: TalkStore,
    private nerdTalksApi: NerdTalksApi
    ) {}

  getTalks() {
    this.nerdTalksApi
      .getAllTalks()
      .subscribe(talks => this.nerdEventStore.set(talks));
  }
}
