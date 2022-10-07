import { Injectable } from '@angular/core';
import { User } from './user';
import{Page} from './page';
import { catchError, Observable, throwError } from 'rxjs';
import {
  HttpHeaders,
  HttpErrorResponse,
  HttpClient,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  baseURL = 'api';
  pageURL='page';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

  // Get Users

  getUsers() {
    return this.http.get(this.baseURL);
  }
  // Create User
  addUser(name: string, profileImage: File): Observable<any> {
    var formData: any = new FormData();
    formData.append('name', name);
    formData.append('avatar', profileImage);

    return this.http.post<User>(`${this.baseURL}/create-user`, formData, {
      reportProgress: true,
      observe: 'events',
    });
  }
  // create a page 
  
  addPage(page:string):Observable<any>{
    let pageApi=`${this.pageURL}`;
    return this.http.post(pageApi,page);
  }

  // get all  page data
  getPage(){
    let pageApi=`${this.pageURL}`;
    return this.http.get(pageApi);
  } 
  

  // Error handling
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
