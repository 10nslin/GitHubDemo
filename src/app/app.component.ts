import { Component, OnInit } from '@angular/core';
import {GitHubService} from './git-hub.service';
import {User} from './user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  score: number;
  numOfFollowers: number;
  user: User = new User();
  constructor(private _gitHubService: GitHubService){

  }

  ngOnInit() {
    // this will run when the component is loaded

  }

  onSubmit(){
    // Send the unserName to the service
    this._gitHubService.getGitHubData(this.user, (response) =>{
      this.score = response.public_repos;
      this.numOfFollowers = response.followers;
    });
    console.log(this.user);
    this.user = new User();
  }
}
