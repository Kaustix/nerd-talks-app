import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { produce } from 'immer';
import { Talk } from './talk.model';
import { VISIBILITY_FILTER } from '../talk-filter/filter.model';

export interface TalkState extends EntityState<Talk>{
  filter: VISIBILITY_FILTER;
}

const initialState: TalkState = {
  filter: VISIBILITY_FILTER.SHOW_UPCOMING
};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'talks', producerFn: produce })
export class TalkStore extends EntityStore<TalkState, Talk> {
  constructor() {
    super(initialState);
  }
}

