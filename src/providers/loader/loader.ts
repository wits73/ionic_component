//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController } from "ionic-angular";

@Injectable()
export class LoaderProvider {
  /*
  constructor(public http: HttpClient) {
    console.log('Hello LoaderProvider Provider');
  }
  */
  private loader: any;
  constructor(private loadingCtrl: LoadingController) {
    //console.log('Hello LoaderProvider Provider');

  }

  show() {
    this.loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    this.loader.present();
  }

  hide() {
    this.loader.dismiss();
  }

}
