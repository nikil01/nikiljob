import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-download',
  templateUrl: './download.page.html',
  styleUrls: ['./download.page.scss'],
})
export class DownloadPage implements OnInit {

  constructor(private route : Router) { }
  onClicked(){
    this .route.navigate(['/welcome']);
  }

  ngOnInit() {
  }

}
