import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { NerdEventService } from '../../services/nerd-event.service';
import { Types } from '../actions/nerd-event.actions';

@Injectable()
export class NerdEventEffects {
  constructor(
    private actions: Actions,
    private nerdEventService: NerdEventService) {}

  getEvents = createEffect(() => this.actions.pipe(
      ofType(Types.GetEvents),
      mergeMap(() => this.nerdEventService.getAll()
        .pipe(
          map(events => ({ type: Types.GetEventsSucceeded, payload: events })),
          catchError(() => EMPTY)
      ))
    )
  );
}
