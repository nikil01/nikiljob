import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MyprofilePage } from '../myprofile/myprofile.page';
import { WelcomePage } from '../welcome/welcome.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public modalCtrl: ModalController,
  ) { }

  ngOnInit() {
  }
  async myprofile() {
    const modal = await this.modalCtrl.create({
      component:MyprofilePage ,
     
      
     
    })
    return await modal.present();
  }

   async dismiss() {
    const modal = await this.modalCtrl.create({
      component:WelcomePage ,
     
      
     
    })
    return await modal.present();
  }
    
  
}