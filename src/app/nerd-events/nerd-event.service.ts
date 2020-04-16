import { Injectable } from '@angular/core';
import { NerdEventStore } from './nerd-event.store';
import { NerdTalksApi } from '../api/nerd-talks.api';

@Injectable({ providedIn: 'root' })
export class NerdEventService {
  constructor(
    private nerdEventStore: NerdEventStore,
    private nerdTalksApi: NerdTalksApi
    ) {}

  getEvents() {
    this.nerdTalksApi
      .getAllEvents()
      .subscribe(events => this.nerdEventStore.set(events));
  }
}
