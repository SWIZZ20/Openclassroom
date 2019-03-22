import { LendCdPage } from './../pages/lend-cd/lend-cd';
import { CdListPage } from './../pages/cd-list/cd-list';
import { BookListPage } from './../pages/book-list/book-list';
import { TabsPage } from './../pages/tabs/tabs';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LendBookPage } from '../pages/lend-book/lend-book';
import { ServicesProvider } from '../providers/services/services';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    BookListPage,
    CdListPage,
    LendCdPage,
    LendBookPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    BookListPage,
    CdListPage,
    LendCdPage,
    LendBookPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServicesProvider
  ]
})
export class AppModule {}
