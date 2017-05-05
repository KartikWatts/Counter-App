import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
    selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  public swipe: number = 0;
  public tap: number = 0;
  public round: number = 0;
  public message: string = "हरे कृष्णा प्रभु !! १६ माला करनी है आज";
  public left: number = 16;
  constructor(public navCtrl: NavController) {

  }

  swipeEvent(e) {
    
 this.tap++;
    if(this.tap==108){this.round++;
    this.tap=0;
    if(this.round==16){
      this.message="बधाईयाँ!! आज का आप का दिन सफल हुआ!! :)";
    } 
  }
  this.left= 16-this.round;
    if(this.round >= 16)
    {
      this.left=0;
    } 
  }
  tapEvent(e) {
    this.tap++;
    if(this.tap==108){this.round++;
    this.tap=0;
    if(this.round==16){
      this.message="बधाईयाँ!! आज का आप का दिन सफल हुआ!! :)";
    }  
  }
  this.left= 16-this.round;
    if(this.round >= 16)
    {
      this.left=0;
    }
  }

  resetEvent(e){
    this.tap = 0;
  }

  Reset(e){
    this.tap = 0;
    this.left = 16;
    this.round = 0;
  }
}