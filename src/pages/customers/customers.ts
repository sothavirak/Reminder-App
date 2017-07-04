import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CustomerService } from '../../services/customer';

import { Customer } from '../../models/Customer';

import { CustomerPage } from '../customer/customer';

@Component({
  selector: 'page-customers',
  templateUrl: 'customers.html',
})
export class CustomersPage implements OnInit {

	customerList: Customer[];

	customerPage = CustomerPage;

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
