import { Component } from '@angular/core';

import { NgForm } from '@angular/forms';

import { CustomerService } from '../../services/customer';

import { Customer } from '../../models/Customer';

@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {

	constructor(private customerService: CustomerService) {}

	onRegisterCustomer(form: NgForm) {
		this.customerService.addItem(form.value.customerName, form.value.phoneNumber);
		form.reset();
	}

}
