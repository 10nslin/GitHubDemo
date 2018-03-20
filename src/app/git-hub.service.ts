import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {User} from './user';

@Injectable()
export class GitHubService {

  constructor(private _http: Http) { }

  baseUrl = 'https://api.github.com/users/';

  getGitHubData(user: User, callback){
    this._http.get(this.baseUrl + user.userName).subscribe(
      // callback => success
      (response) => {
        callback(response.json());
        console.log(response.json());
      },
      // callback => errors
      (errors) => {
        console.log(errors);
       }
    );
  }
}
