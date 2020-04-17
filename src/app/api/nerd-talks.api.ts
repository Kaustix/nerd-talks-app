import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { Talk } from '../talks/state/talk.model';

@Injectable({providedIn: 'root'})
export class NerdTalksApi {
  constructor(private http: HttpService) {
  }

  getAllTalks(): Observable<Talk[]> {
    return this.http.get<Talk[]>('/talks');
  }
}
