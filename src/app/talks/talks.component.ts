import { Component, OnInit } from '@angular/core';
import { TalkQuery } from './talk.query';
import { TalkService } from './talk.service';
import { Talk } from './talk.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-talks',
  templateUrl: './talks.component.html',
  styleUrls: ['./talks.component.scss']
})
export class TalksComponent implements OnInit {
  talks: Observable<Talk[]>;

  constructor(
    private talkQuery: TalkQuery,
    private talkService: TalkService
  ) { }

  ngOnInit() {
    this.talkService.getTalks();
    this.talks = this.talkQuery.selectAll();
  }

  filterUpcoming() {
    console.log('showing upcoming');
  }

  filterPast() {
    console.log('showing past');
  }
}
