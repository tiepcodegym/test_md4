import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class AwesomeService {

  api_url = 'http://localhost:3000/awesomes/'

  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get(this.api_url);
  }

  deleteAwesome(id:number):Observable<any>{
    return this.http.delete(this.api_url+id);
  }

  createAwesome(data: any):Observable<any>{
    return this.http.post(this.api_url,data)
  }

  getAwesome(id:number):Observable<any>{
    return this.http.get(this.api_url+id)
  }

  update(data: any, id: number | undefined):Observable<any>{
    return this.http.put(this.api_url+id,data)
  }


}
