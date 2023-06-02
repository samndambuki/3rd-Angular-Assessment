import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwitterService } from 'src/twitter.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  public users$ = this.twitterService.users$;

  constructor(private twitterService: TwitterService) { }

  ngOnInit(): void {
    this.twitterService.getUsers();
  }

  public selectUser(userId: number): void {
    this.twitterService.getPosts(userId);
  }

}
