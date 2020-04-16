import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { RouterReducerState, routerReducer} from '@ngrx/router-store';
import { environment } from '../../../environments/environment';
import { NerdEventState, nerdEventsReducer } from './nerd-event.reducer';

export interface State {
  router: RouterReducerState;
  nerdEvents: NerdEventState;
}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer,
  nerdEvents: nerdEventsReducer
};

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [debug];
