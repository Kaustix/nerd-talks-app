import { Action, createReducer, on } from '@ngrx/store';
import { INerdEvent } from '../../models/nerd-event.interface';
import { Actions } from '../actions/nerd-event.actions';

export interface INerdEventState {
  events: INerdEvent[];
  selectedEvent: INerdEvent;
}

export const initialState: INerdEventState = {
  events: [],
  selectedEvent: null
};

const reducer = createReducer(
  initialState,
  on(Actions.GetEventsSucceeded, (state, { payload }) => ({ ...state, events: payload })),
);

export function nerdEventsReducer(state: INerdEventState | undefined, action: Action) {
  return reducer(state, action);
}
