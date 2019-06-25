import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { CachedResourceLoader } from '@angular/platform-browser-dynamic/src/resource_loader/resource_loader_cache';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 mostrar:boolean
 loader;
  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController) {

  }

  

  aparecer(){
    this.mostrar=!this.mostrar
  }

  
}
