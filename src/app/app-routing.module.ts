import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlltweetsComponent } from './alltweets/alltweets.component';
import { SingletweetComponent } from './singletweet/singletweet.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  { path: 'tweets', component: AlltweetsComponent },
  {path: 'tweet',   component:SingletweetComponent},
  {path: 'main',  component:MainComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
