import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { CustomerService } from '../services/customer';

import { MyApp } from './app.component';
import { CustomersPage }  from '../pages/customers/customers';

import { IonicStorageModule } from '@ionic/storage';

import { TabsPage } from '../pages/tabs/tabs';
import { RegistrationPage } from '../pages/registration/registration';

@NgModule({
  declarations: [
    MyApp,
    CustomersPage,
    TabsPage,
    RegistrationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CustomersPage,
    TabsPage,
    RegistrationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CustomerService
  ]
})
export class AppModule {}
