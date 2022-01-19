import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { HomePage } from '../home/home.page';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.page.html',
  styleUrls: ['./myprofile.page.scss'],
})
@NgModule({
  imports: [
      
      FormsModule,
      ReactiveFormsModule
  ],
})
export class MyprofilePage implements OnInit {
  [x: string]: any;
today:any;
selectedDate:any;
age = 0;

  constructor( private route : Router) {
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
  this.route.navigateByUrl('/download');
}


}
