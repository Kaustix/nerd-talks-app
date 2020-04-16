import { Injectable } from '@angular/core';
import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import { NerdEvent } from './nerd-event.model';

export interface NerdEventState extends EntityState<NerdEvent>{
  filter: string;
}

export function createInitialState(): NerdEventState {
  return {
    filter: 'ALL'
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'nerdEvents' })
export class NerdEventStore extends EntityStore<NerdEventState, NerdEvent> {
  constructor() {
    super();
  }
}

