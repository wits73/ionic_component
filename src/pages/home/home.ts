import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  private menus = [
    {
      title:"Component",
      code:"01"
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  gotoMenu(menu){
    if(menu.code === '01'){
      this.navCtrl.push("ComponentPage")
    }
  }
}
