import { Injectable } from '@angular/core';
import * as faker from 'faker';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { NerdEvent } from '../../nerd-events/nerd-event.model';

@Injectable()
export class FakeNerdTalksApi implements InMemoryDbService {
  createDb() {
    const events = this.createEvents();

    return {
      events
    };
  }

  createEvents(total = 20) {
    const events = [];
    for (let i = 1; i <= total; i += 1) {
      const event: NerdEvent = {
        id: i,
        presenter: `${faker.name.firstName()} ${faker.name.lastName()}`,
        description: faker.lorem.sentences()
      };
      events.push(event);
    }
    return events;
  }
}
