import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {News} from "./interfaces/news";

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {
   private url : string = "https://hn.algolia.com/api/v1/search_by_date?query=angular&page=0";
  constructor(private http: HttpClient) { }


  //selecciono los parametros del api
  get getParametros(){
    return   new HttpParams()
      .set('fields','author,story_title,story_url,created_at');
  }


  buscarNoticias(termino:string): Observable<News[]>{
    const url = `${this.url}`;
    return this.http.get<News[]>(url,{params:this.getParametros});
  }


}
