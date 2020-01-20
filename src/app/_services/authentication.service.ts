import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../_models';
import {LoginClientDTO} from "../dto/LoginClientDTO";

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(loginClientDto : LoginClientDTO) {
      console.log(loginClientDto.username)
        return this.http.post<any>(`https://epod-zuul.herokuapp.com/api/v1/auth-server/login`, loginClientDto)
            .pipe(map(LoginClientDTO => {
                // login successful if there's a jwt token in the response
                if (LoginClientDTO ) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(LoginClientDTO));
                    this.currentUserSubject.next(LoginClientDTO);
                    console.log(localStorage.getItem('currentUser'));
                    
                }

                return LoginClientDTO;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
