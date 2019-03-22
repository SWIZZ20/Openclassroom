import { Component } from '@angular/core';
import {NavParams, ViewController } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';

/**
 * Generated class for the LendCdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-lend-cd',
  templateUrl: 'lend-cd.html',
})
export class LendCdPage {

  Cd:any;
  index:number;
  constructor(private viewCtrl:ViewController ,public navParams: NavParams, public service:ServicesProvider) {
    this.index=this.navParams.get('index');
    this.Cd=this.service.cdList[this.index];
  }

  closeModal()
  {
    this.viewCtrl.dismiss();
  }

  onLend(data:string)
  {
    this.Cd.isLend=!this.Cd.isLend;
    console.log(this.Cd.isLend);
  }

}
