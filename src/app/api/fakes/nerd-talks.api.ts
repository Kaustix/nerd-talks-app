import { Injectable } from '@angular/core';
import * as faker from 'faker';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Talk } from '../../talks/state/talk.model';

@Injectable()
export class FakeNerdTalksApi implements InMemoryDbService {
  createDb() {
    const talks = this.createTalks();

    return {
      talks
    };
  }

  createTalks(total = 20) {
    const talks = [];
    for (let i = 1; i <= total; i += 1) {
      const random = Math.random() >= 0.5;
      const talk: Talk = {
        id: i,
        title: faker.company.catchPhrase(),
        presenter: `${faker.name.firstName()} ${faker.name.lastName()}`,
        description: faker.lorem.sentences(),
        date: random ? faker.date.past() : faker.date.future()
      };
      talks.push(talk);
    }
    return talks;
  }
}
