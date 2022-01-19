import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController} from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { RegisterPage } from '../register/register.page';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(

    public route : Router,
  ) { }
  register(){
    this .route.navigate(['/register']);
  }
  login(){
    this .route.navigate(['/login']);
  }


  ngOnInit() {
  }
  
}
 
