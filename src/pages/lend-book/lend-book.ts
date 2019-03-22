import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';

/**
 * Generated class for the LendBookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-lend-book',
  templateUrl: 'lend-book.html',
})
export class LendBookPage {

  Book:any;
  index:number;
  lend:boolean;
  back:boolean;

  constructor(public viewCtrl: ViewController, public navParams: NavParams,private service: ServicesProvider) {
    this.index=this.navParams.get('index');
    this.Book=this.service.bookList[this.index];
  }

  closeModal()
  {
    this.viewCtrl.dismiss();
  }

  onLend(data:string)
  {
    this.Book.isLend=!this.Book.isLend;
    console.log(this.Book.isLend);
  }

}
