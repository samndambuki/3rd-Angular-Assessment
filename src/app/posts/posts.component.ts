import { Component } from '@angular/core';
import { TwitterService } from 'src/twitter.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  public posts$ = this.twitterService.posts$;

  constructor(private twitterService: TwitterService) { }

  ngOnInit(): void {
  }

  public selectPost(postId: number): void {
    this.twitterService.getComments(postId);
  }

}
