import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Talk } from './talk.model';

export interface TalkState extends EntityState<Talk>{
  filter: string;
}

export function createInitialState(): TalkState {
  return {
    filter: 'ALL'
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'talks' })
export class TalkStore extends EntityStore<TalkState, Talk> {
  constructor() {
    super(createInitialState());
  }
}

