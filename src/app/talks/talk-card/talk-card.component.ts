import { Component, Input } from '@angular/core';
import { Talk } from '../state/talk.model';

@Component({
  selector: 'app-talk-card',
  templateUrl: './talk-card.component.html'
})
export class TalkCardComponent {
  @Input() talk: Talk;
}
