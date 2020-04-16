import { createSelector } from '@ngrx/store';
import { State } from '../reducers';
import { NerdEventState } from '../reducers/nerd-event.reducer';

const selectEventState = (state: State) => state.nerdEvents;

export const selectEvents = createSelector(
  selectEventState,
  (state: NerdEventState) => state.events
);

