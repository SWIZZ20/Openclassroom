import { CdListPage } from './../cd-list/cd-list';
import { BookListPage } from './../book-list/book-list';
import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  bookListPage=BookListPage;
  cdListPage=CdListPage;
  constructor() {

  }

  

}
