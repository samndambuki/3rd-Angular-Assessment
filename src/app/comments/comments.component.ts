import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {
  @Input() tweetId!: number;
  comments$!: Observable<Comment[]>;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadComments();
  }

  loadComments() {
    this.comments$ = this.http.get<Comment[]>('https://jsonplaceholder.typicode.com/comments', {
      params: { postId: this.tweetId.toString() },
    });
  }

}
