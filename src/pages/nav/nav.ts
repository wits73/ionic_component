import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-nav',
  templateUrl: 'nav.html',
})
export class NavPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  private account = {
    email:"",
    password:""
  }

  ionViewDidLoad() {
    //console.log(this.navParams.get("account"));
    this.account = this.navParams.get("account");
  }

}
