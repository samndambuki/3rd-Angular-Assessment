import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlltweetsComponent } from './alltweets/alltweets.component';

import { SingletweetComponent } from './singletweet/singletweet.component';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { UsersComponent } from './users/users.component';
import { CommentsComponent } from './comments/comments.component';
import { PostsComponent } from './posts/posts.component';



@NgModule({
  declarations: [
    AppComponent,
    PostsComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlltweetsComponent,
    SingletweetComponent,
    FormsModule,
    MainComponent,
    UsersComponent,
    CommentsComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
