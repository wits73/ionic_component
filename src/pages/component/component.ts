import { Component } from '@angular/core';
import {LoaderProvider} from "../../providers/loader/loader";
import {UserProfileInterface} from "../../interfaces/user-profile";
import { IonicPage, NavController, NavParams, ActionSheetController
         ,Platform,
         ModalController,
         AlertController,
         ToastController,
         LoadingController} from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-component',
  templateUrl: 'component.html',
})
export class ComponentPage {

  constructor(public navCtrl: NavController, 
    private actionsheetCtrl: ActionSheetController,
    private platform: Platform,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private loader: LoaderProvider,
    public navParams: NavParams) {
  }
  private account = { } as UserProfileInterface;
  /*
  private account = {
    email:"",
    password:""
  }
  */
  ionViewDidLoad() {
    console.log('ionViewDidLoad ComponentPage');
  }

  modal(){
    let modal = this.modalCtrl.create('ModalPage');
    modal.onDidDismiss(data => {
      console.log(data);
    });
    modal.present();
  }

  slide(){
    this.navCtrl.push('SlidePage');
  }

  alert_test() {
    let prompt = this.alertCtrl.create({
      title: 'Login',
      message: "Enter email and password",
      inputs: [
        {
          name: 'email',
          placeholder: 'Type Email..'
        },
        {
          name: 'password',
          placeholder: 'Type Password'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.account = {
              email : data.email,
              password : data.password
            }
            this.navCtrl.push('NavPage',{
              account : this.account
            });
          }
        }
      ]
    });
    prompt.present();
  }

  actionsheet() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Choose Menu',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: 'Share',
          icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
            alert("Alert");
          }
        },
        {
          text: 'Search',
          icon: !this.platform.is('ios') ? 'search' : null,
          handler: () => {
            console.log('Play clicked');
          }
        },
        {
          text: 'Favorite',
          icon: !this.platform.is('ios') ? 'heart-outline' : null,
          handler: () => {
            console.log('Favorite clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  toast_test() {
    let toast = this.toastCtrl.create({
      message: 'Toast just 3 seconds',
      duration: 3000
    });
    toast.present();
  }

  loading_test() {
    this.loader.show();
    setTimeout(() =>{
      this.loader.hide();
    }, 3000);
  }

}
