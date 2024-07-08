import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AddCategoryRequest } from '../models/add-category.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl:string='https://localhost:7090/api/v1/categories/';
  constructor(private http:HttpClient) { }

  addCategory( model: AddCategoryRequest): Observable<void>{
    return this.http.post<void>(this.apiUrl+'addCategory', model);
  }
  getCategories():Observable<any>{
    return this.http.get(this.apiUrl+'getCategories');
  }
}
