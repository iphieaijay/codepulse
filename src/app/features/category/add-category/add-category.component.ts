import { Component, model, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddCategoryRequest } from '../models/add-category.model';
import { CategoryService } from '../service/category.service';
import { Subscription } from 'rxjs';
import { ToastService } from '../../../core/service/toast.service';
@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent implements OnDestroy{
  model:any;
  private addCategorySubscription?: Subscription;

  constructor(private categoryService:CategoryService, private toastService:ToastService) {
    this.model = {
      name:'',
      slug:''
    };
  }
  
  onSubmit(){
    //debugger
    this.addCategorySubscription=this.categoryService.addCategory(this.model)
    .subscribe((res:any)=>{
      if(res.responseCode==200){
        this.toastService.showSuccess(res.responseMessage, 'Success');
      }
      else{
        this.toastService.showError(res.responseMessage, 'Error');
      }
      
    });
    }
    
    ngOnDestroy(): void {
    this.addCategorySubscription?.unsubscribe();
  }

  
}
