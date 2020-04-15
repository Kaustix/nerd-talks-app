import { createAction, props } from '@ngrx/store';
import { INerdEvent } from '../../models/nerd-event.interface';

export enum Types {
  GetEvents = 'GET_EVENTS',
  GetEventsSucceeded = 'GET_EVENTS_SUCCEEDED'
}

export const Actions = {
  GetEvents: createAction(Types.GetEvents),
  GetEventsSucceeded: createAction(Types.GetEventsSucceeded, props<{ payload: INerdEvent[] }>())
};
