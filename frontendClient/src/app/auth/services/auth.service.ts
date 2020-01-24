import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {TokenService } from './token.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private url = '/api';
    // private url = 'http://127.0.0.1:8000/api';

    private logIn = new BehaviorSubject<boolean>(this.Token.loggedIn());
    authStatus = this.logIn.asObservable();

    changeAuthStatus(e: boolean) {
      this.logIn.next(e);
    }

  constructor(
    private http: HttpClient,
    private Token: TokenService,
  ) { }

  login(data) {
    return this.http.post(this.url + /login/ , data, {withCredentials: true});
  }

  resister(data) {
    return this.http.post(this.url + /signup/, data);
  }

  sendPasswordResetLink(data) {
    return this.http.post(this.url + /sendPasswordResetLink/, data);
  }

  changePassword(token, data) {
    return this.http.post(this.url + /changePassword/ + token, data);
  }


}
