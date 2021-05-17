import { User } from './user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';
import { Router } from '@angular/router';
interface AuthResponseData{
    
    kind:String;
    idToken:string;
    email:string;
    refreshToken:String;
    expiresIn:String;
    localId:string;
    registered?:boolean;

    
}

@Injectable({providedIn: 'root'})
export class AuthService{
    user=new Subject<User>();


constructor(private http:HttpClient , private router : Router){

}

signup(email:string,password:string)
{
    return this.http.post<AuthResponseData>
    ('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDll22rv7GWUaD1pVuabpNjv7lM5J3uBQc' ,
    {
        email:email,
        password:password,
        returnSecureToken: true
    } 
    ).pipe(catchError(errorRes =>{

        let errorMessage = 'An unkown message';
        if(!errorRes.error || !errorRes.error.error)
        {
            return throwError(errorMessage);
        }
        switch(errorRes.error.error.message)
        {
            case 'EMAIL_EXISTS' : 
            errorMessage="This email already exists !!";
        }


        return throwError(errorMessage);
    }),tap(resData => this.handleAuthetication(resData.email,resData.localId,resData.idToken,+resData.expiresIn)));
}

login(email:string,password:string)
{   
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDll22rv7GWUaD1pVuabpNjv7lM5J3uBQc',
    {
        email:email,
        password:password,
        returnSecureToken: true
    } 
    
    ).pipe(catchError(errorRes =>{

        let errorMessage = 'An unkown message';
        if(!errorRes.error || !errorRes.error.error)
        {
            return throwError(errorMessage);
        }
        switch(errorRes.error.error.message)
        {
            case 'EMAIL_EXISTS' : 
            errorMessage="This email already exists !!";
        }


        return throwError(errorMessage);
    }),tap(resData => this.handleAuthetication(resData.email,resData.localId,resData.idToken,+resData.expiresIn)));
}

logout(){
    this.user.next(null);
    this.router.navigate(['/']);

}


private handleAuthetication(
    email:string,
    userId:string,
    token:string,
    expiresIn:number
){
    const expirationDate = new Date(new Date().getTime() + expiresIn *1000);
    const user= new User(email, userId ,token ,expirationDate);
    this.user.next(user);


}


}