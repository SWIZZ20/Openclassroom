import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
import { LendCdPage } from '../lend-cd/lend-cd';
import { ServicesProvider } from '../../providers/services/services';



@IonicPage()
@Component({
  selector: 'page-cd-list',
  templateUrl: 'cd-list.html',
})
export class CdListPage {
  
  cdList:any;

  constructor(private modalCtrl:ModalController, public service:ServicesProvider) {
    this.cdList= this.service.cdList;
  }

  onCdStatu(index:number)
  {
    console.log("index :"+index);
    let modal= this.modalCtrl.create(LendCdPage,{index:index});
    modal.present();
  }
  

}
