import { createAction, props } from '@ngrx/store';
import { NerdEvent } from '../../models/nerd-event.interface';

export enum NerdEventTypes {
  GetEvents = 'GET_EVENTS',
  GetEventsSucceeded = 'GET_EVENTS_SUCCEEDED'
}

export const NerdEventActions = {
  getEvents: createAction(NerdEventTypes.GetEvents),
  getEventsSucceeded: createAction(NerdEventTypes.GetEventsSucceeded, props<{ payload: NerdEvent[] }>())
};
