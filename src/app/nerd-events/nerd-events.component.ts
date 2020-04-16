import { Component, OnInit } from '@angular/core';
import { NerdEventQuery } from './nerd-event.query';
import { NerdEventService } from './nerd-event.service';
import { NerdEvent } from './nerd-event.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nerd-events',
  templateUrl: './nerd-events.component.html',
  styleUrls: ['./nerd-events.component.scss']
})
export class NerdEventsComponent implements OnInit {
  events: Observable<NerdEvent[]>;

  constructor(
    private nerdEventQuery: NerdEventQuery,
    private nerdEventService: NerdEventService
  ) { }

  ngOnInit() {
    this.nerdEventService.getEvents();
    this.events = this.nerdEventQuery.selectAll();
  }
}
