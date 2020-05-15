import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { 
    console.log("service constructor");
  }

getProduct1():Observable<any>{
  let url="../../assets/products.json";
  return this.http.get(url);
}



}
