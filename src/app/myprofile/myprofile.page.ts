import { Component,  OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { NgModule } from '@angular/core';


@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.page.html',
  styleUrls: ['./myprofile.page.scss'],
})
@NgModule({
  imports: [
      HttpHeaders,
      FormsModule,
      ReactiveFormsModule
  ],
})
export class MyprofilePage implements OnInit {

users: any ={};
  [x: string]: any;

today:any;
selectedDate:any;
age = 0;

  constructor( 
    private route : Router,
    private http : HttpClient,
    ) {
    this.today = new Date().toISOString();
   }
   

  ngOnInit() {
  }
  
calcage(){
  let today:any = new Date();
  let age =Math.round((Math.abs(this.selectedDate-today)/24*60*60*1000)/365);
  this.age =age;
}
submit(){
        //  this.http.get("https://erp.teamproit.com/api/method/version").subscribe((res) =>{
        //    console.log(res);

        //  });
         
        
         this.http.post("https://erp.teamproit.com/api/method/jobpro.api.test_api",this.users,{headers:{'Accept': 'application/json','Content-Type': 'application/json',}}).subscribe((result:any) =>{
           console.log("result",result);
           this.users=result;
           console.log("users",this.users);                                  
         })
    }


}
