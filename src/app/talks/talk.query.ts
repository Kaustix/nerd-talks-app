import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { TalkState, TalkStore } from './talk.store';
import { Talk } from './talk.model';

@Injectable({ providedIn: 'root' })
export class TalkQuery extends QueryEntity<TalkState, Talk> {
  constructor(protected talkStore: TalkStore) {
    super(talkStore);
  }
}
