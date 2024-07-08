import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CategoryService } from '../service/category.service';
import { Subscription } from 'rxjs';
import { ToastService } from '../../../core/service/toast.service';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit {
[x: string]: any;
  categoryService=inject(CategoryService);
  toastService=inject(ToastService);
  private categoryListSubscription?:Subscription;
  categorydata:any=[];
constructor(){

}
  ngOnInit(): void {
    this.getCategories();
  }
  
  getCategories(){
    //debugger
    //this.categoryListSubscription=
    this.categoryService.getCategories().subscribe((res:any)=>{
      if(res.responseCode==200){
         this.categorydata=res.data; 
         this.toastService.showSuccess(res.responseMessage, 'Success');
        }
        else{
          this.toastService.showError(res.responseMessage, 'Error');
      }
    });
  }

ngOnDestroy(): void {
    this.categoryListSubscription?.unsubscribe();
  }
}
