import { Component } from '@angular/core';
import { DbserviceService } from '../../shared/services/dbservice.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-productdash',
  imports: [CommonModule,RouterLink],
  templateUrl: './productdash.component.html',
  styleUrl: './productdash.component.css'
})
export class ProductdashComponent {

  productArray:any;
  constructor(public dbobj :DbserviceService){
   
  }
  ngOnInit(){
    this.fetchData();
    }
    fetchData(){
      this.dbobj.getRecord("products").subscribe((res:any)=>{
        console.log(res);
        this.productArray=res;
      })
    }
    deleteData(id:any){
      if (window.confirm(`Are you sure to delete product with id:${id}`)) {
        this.dbobj.deleteRecord("products",id).subscribe(()=>{
          window.alert("product delete successfully");
          this.fetchData();
        })
      }
    }
    
}

