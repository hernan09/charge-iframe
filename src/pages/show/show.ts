import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, HttpModule } from '@angular/http';
import Matcher from 'didyoumean';

/**
 * Generated class for the ShowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show',
  templateUrl: 'show.html',
})
export class ShowPage {
  predictionData:any
  items:any
  PredictShowSymptom:any
  showPrediction:Boolean=false
  boleanlist:boolean=false
  Match:string
  

  lista=['OIDO','PECHO','DOLOR','BRADICARDIA','MOLESTIA','HISOPO','PICAZON','MALESTAR','TENGO','CORAZON']


  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
    
    this.initializeItems()
  }

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad ShowPage');
  }
  //predictivo logica
initializeItems() {

  this.items=this.lista
 
 }

 
 
 
 getItems(ev: any) {
   // Reset items back to all of the items
   this.initializeItems();
   this.matchear();
   // set val to the value of the searchbar
   const val = ev.target.value;
 
   // if the value is an empty string don't filter the items
   
   if (val && val.trim() != '' && val.length>3) {
     this.showPrediction=true
    
     this.items = this.items.filter((item) => {
       
       return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);

     })
   }
 }
 setValueSymptom(value) {

  this.showPrediction = false;

  this.PredictShowSymptom=value;

 }
matchear(){
  let input =this.PredictShowSymptom
  this.lista
  this.Match = Matcher(input,this.lista)
  console.log(this.Match)
}

 seting(){

   this.PredictShowSymptom=this.Match

   this.boleanlist=false
 }

 sintomSelected(){
  this.matchear()
 
   this.items.forEach(element => {

      if(this.PredictShowSymptom==element){
         
        console.log('esta en la lista')
   
      }
     
   });
 }



}
