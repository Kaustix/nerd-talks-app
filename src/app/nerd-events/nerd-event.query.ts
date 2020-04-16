import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { NerdEventState, NerdEventStore } from './nerd-event.store';
import { NerdEvent } from './nerd-event.model';

@Injectable({ providedIn: 'root' })
export class NerdEventQuery extends QueryEntity<NerdEventState, NerdEvent> {
  constructor(protected nerdEventStore: NerdEventStore) {
    super(nerdEventStore);
  }
}
