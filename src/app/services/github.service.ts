import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
	private username:string;
	private client_id = '9da673c4d2e24a169801';
	private client_secret = 'ed0d1fa6b278023dafde3002bb26da82b525567a';


	constructor(private _http: Http){
		console.log('github testing');
		this.username = 'andcliu';
	}

	getUser(){
		return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
			.map(res => res.json());
	}

	getRepos(){
		return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
			.map(res => res.json());
	}

	updateUser(username:string){
		this.username = username;
	}
}