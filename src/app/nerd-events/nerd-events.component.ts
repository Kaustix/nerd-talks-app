import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { NerdEventActions } from '../store/actions/nerd-event.actions';
import { selectEvents } from '../store/selectors/nerd-event.selectors';


@Component({
  selector: 'app-nerd-events',
  templateUrl: './nerd-events.component.html',
  styleUrls: ['./nerd-events.component.scss']
})
export class NerdEventsComponent implements OnInit {
  events = this.store.pipe(select(selectEvents));

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(NerdEventActions.getEvents());
  }
}
