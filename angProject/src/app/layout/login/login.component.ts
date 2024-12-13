import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { log } from 'console';
import { DbserviceService } from '../../shared/services/dbservice.service';
import { retry } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  uid:any;
  upass:any;
  userData:any;
  constructor(private _dbserv:DbserviceService,private _router:Router){}
  checkUser(){
    // console.log(this.uid,this.upass);
    this._dbserv.getRecord("user").subscribe((res)=>{
      // console.log(res);
      this.userData=res;
      const currentUser = this.userData.filter((val:any,index:any)=>{return val.userid===this.uid && val.userpass===this.upass})

      if (currentUser.length > 0) {
        sessionStorage.setItem("user",this.uid);
        this._router.navigate(["/maindashboard"])
      } else {
        window.alert("wrong credentials");
        this.uid="";
        this.upass="";
      }
    })
    
  }

}
