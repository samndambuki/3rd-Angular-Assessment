import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Tweet } from './interfaces/tweet';
import { User } from './interfaces/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TwitterService {
  private usersSubject: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  private postsSubject: BehaviorSubject<Tweet[]> = new BehaviorSubject<Tweet[]>([]);
  private commentsSubject: BehaviorSubject<Comment[]> = new BehaviorSubject<Comment[]>([]);
  
  public users$: Observable<User[]> = this.usersSubject.asObservable();
  public posts$: Observable<Tweet[]> = this.postsSubject.asObservable();
  public comments$: Observable<Comment[]> = this.commentsSubject.asObservable();

  constructor(private http: HttpClient) { }

  public getUsers(): void {
    this.http.get<User[]>('https://jsonplaceholder.typicode.com/users').subscribe((users: User[]) => {
      this.usersSubject.next(users);
    });
  }

  public getPosts(userId: number): void {
    this.http.get<Tweet[]>('https://jsonplaceholder.typicode.com/posts?userId=' + userId).subscribe((posts: Tweet[]) => {
      this.postsSubject.next(posts);
    });
  }

  public getComments(postId: number): void {
    this.http.get<Comment[]>('https://jsonplaceholder.typicode.com/comments?postId=' + postId).subscribe((comments: Comment[]) => {
      this.commentsSubject.next(comments);
    });
  }
}
