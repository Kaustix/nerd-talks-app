import { Injectable } from '@angular/core';
import * as faker from 'faker';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Talk } from '../../talks/talk.model';

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
      const talk: Talk = {
        id: i,
        presenter: `${faker.name.firstName()} ${faker.name.lastName()}`,
        description: faker.lorem.sentences()
      };
      talks.push(talk);
    }
    return talks;
  }
}
