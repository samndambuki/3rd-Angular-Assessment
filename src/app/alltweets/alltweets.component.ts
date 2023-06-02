import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import { SingletweetComponent } from '../singletweet/singletweet.component';
import { Tweet } from 'src/interfaces/tweet';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-alltweets',
  standalone: true,
  imports: [CommonModule,SingletweetComponent],
  templateUrl: './alltweets.component.html',
  styleUrls: ['./alltweets.component.css']
})

export class AlltweetsComponent {
  
tweets$!:Observable<Tweet[]>;

constructor(private http:HttpClient){}

ngOnInit(): void {
  this.loadTweets();
}

loadTweets() {
  this.tweets$ = this.http.get<Tweet[]>('https://jsonplaceholder.typicode.com/posts');
}

}
