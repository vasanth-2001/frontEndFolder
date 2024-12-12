import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { log } from 'console';
import { DbserviceService } from '../../shared/services/dbservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productadd',
  imports: [FormsModule],
  templateUrl: './productadd.component.html',
  styleUrl: './productadd.component.css'
})
export class ProductaddComponent {
  constructor(public dbObj:DbserviceService,public router:Router){}
  addData(data:any){
    console.log(data);
    this.dbObj.addRecord("products",data).subscribe(()=>{
      window.alert("product added succesfully");
      this.router.navigate(["/maindashboard/dash"])
    })
  }
}
