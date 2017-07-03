import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CustomerService } from '../../services/customer';

import { Customer } from '../../models/Customer';

@Component({
  selector: 'page-customers',
  templateUrl: 'customers.html',
})
export class CustomersPage implements OnInit {

	customerList: Customer[];

	constructor(private customerService: CustomerService) {}

	onRegisterCustomer(form: NgForm) {
		this.customerService.addItem(form.value.customerName, form.value.phoneNumber);
		form.reset();
		this.loadCustomers();
		console.log(form);
	}

	ngOnInit() {
		this.customerService.fetchCustomers();
	}

	ionViewWillEnter() {
		this.customerList = this.customerService.getCustomerList();
	}

	private loadCustomers() {
		this.customerList = this.customerService.getCustomerList();
	}

}
