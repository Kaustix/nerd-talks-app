import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { INerdEvent } from '../models/nerd-event.interface';

@Injectable()
export class NerdEventService {
  constructor(private apiService: ApiService) {}

  getAll(): Observable<{ events: INerdEvent[] }> {
    return this.apiService.get('/events');
  }
}
