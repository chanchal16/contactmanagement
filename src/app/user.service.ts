import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError} from 'rxjs';
import { tap, catchError, map, retry} from 'rxjs/operators';
import { User } from './models/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user:User;
  id=0;
  apiurl='http://localhost:3000/contacts';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }


    // Get single user data by Id
  getUser(id:number): Observable<User> {
    const url = `${this.apiurl}/${id}`;
    return this.httpClient.get<User>(url).pipe(
        tap(_ => console.log(`fetched id=${id}`)),
        catchError(this.handleError)
      );
  }

      // Get students data
  getList(): Observable<User> {
    return this.httpClient
      .get<User>(this.apiurl)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

    // Update user by id
  updateUser(id, usr): Observable<User> {
    return this.httpClient
      .patch<User>(this.apiurl + '/' + id, JSON.stringify(usr), this.httpOptions)
      .pipe(tap(_ => console.log(`updated product id=${id}`)),
        retry(2),
        catchError(this.handleError)
      )
  }


   // Error handling
   handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }


}
