import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tweet } from 'src/interfaces/tweet';

@Component({
  selector: 'app-singletweet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './singletweet.component.html',
  styleUrls: ['./singletweet.component.css']
})
export class SingletweetComponent {
  @Input() tweet!: Tweet;
}
