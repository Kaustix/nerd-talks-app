import { Action, createReducer, on } from '@ngrx/store';
import { NerdEvent } from '../../models/nerd-event.interface';
import { Actions } from '../actions/nerd-event.actions';

export interface NerdEventState {
  events: NerdEvent[];
  selectedEvent: NerdEvent;
}

export const initialState: NerdEventState = {
  events: [],
  selectedEvent: null
};

const reducer = createReducer(
  initialState,
  on(Actions.GetEventsSucceeded, (state, { payload }) => ({ ...state, events: payload })),
);

export function nerdEventsReducer(state: NerdEventState | undefined, action: Action) {
  return reducer(state, action);
}
