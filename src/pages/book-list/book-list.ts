import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
import { LendBookPage } from '../lend-book/lend-book';
import { ServicesProvider } from '../../providers/services/services';


@IonicPage()
@Component({
  selector: 'page-book-list',
  templateUrl: 'book-list.html',
})
export class BookListPage {

  bookList:any;

  constructor(private modalCtrl:ModalController,private services:ServicesProvider) {
    this.bookList=this.services.bookList;
  }

  onBookStatus(index:number)
  {
    console.log(index);
    let modal=this.modalCtrl.create(LendBookPage,{index:index})
    modal.present();
  }

}
