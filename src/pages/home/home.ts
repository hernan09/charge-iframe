import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { CachedResourceLoader } from '@angular/platform-browser-dynamic/src/resource_loader/resource_loader_cache';
import { ShowPage  } from '../show/show';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 mostrar:boolean
 loader;
  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController) {

  }

  
  nextPage(){
    this.navCtrl.push(ShowPage)
  }

  aparecer(){
    this.mostrar=!this.mostrar
  }

  
}
