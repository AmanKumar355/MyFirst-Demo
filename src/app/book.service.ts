import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class Bookservice {

  constructor(private http:HttpClient) { }
 

  getBookDetails():Observable<any>{
    let url="../../../assets/booklist.json";
    return this.http.get(url);

  }


}
