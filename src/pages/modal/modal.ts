import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  private profile = {
    actionSwitch: false,
    name:"",
    gender:"",
    location:"",
    startTime:""
  }

  constructor(public navCtrl: NavController, 
              private viewCtrl: ViewController,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  close(){
    this.viewCtrl.dismiss();
  }

  save(){
    this.viewCtrl.dismiss(this.profile);
  }

}
