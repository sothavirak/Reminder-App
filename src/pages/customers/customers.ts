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
