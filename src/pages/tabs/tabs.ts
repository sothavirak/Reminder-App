import { Component } from '@angular/core';

import { CustomersPage } from '../customers/customers';
import { RegistrationPage } from '../registration/registration';

@Component({
  selector: 'page-tabs',
  template: `
		<ion-tabs selectedIndex='1'>
			<ion-tab [root]='customersPage' tabTitle='Customers' tabIcon='star'></ion-tab>
			<ion-tab [root]='registrationPage' tabTitle='Registration' tabIcon='book'></ion-tab>
		</ion-tabs>
	`
})
export class TabsPage {
	customersPage = CustomersPage;
	registrationPage = RegistrationPage; 

}
