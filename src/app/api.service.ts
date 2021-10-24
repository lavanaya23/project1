import { Injectable } from '@angular/core';
import { Data } from './models/data';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  url="app/list.json"
  getData(){
    return this.http.get<Data>(this.url)
  }
}
