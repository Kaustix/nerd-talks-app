import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { NerdEvent } from '../nerd-events/nerd-event.model';

@Injectable({providedIn: 'root'})
export class NerdTalksApi {
  constructor(private http: HttpService) {
  }

  getAllEvents(): Observable<NerdEvent[]> {
    return this.http.get<NerdEvent[]>('/events');
  }
}
