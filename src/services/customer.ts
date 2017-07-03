import { Customer } from '../models/customer';

import { Storage } from '@ionic/storage';

import { Injectable } from '@angular/core';

@Injectable()
export class CustomerService {
	private customers: Customer[] = [];

	constructor(private storage: Storage) {}

	addItem(customerName: string, phoneNumber: string) {
		let customer = new Customer(customerName, phoneNumber);

		this.customers.push(customer);
		this.storage.set("custAry", this.customers)
			.then(
				data => {

				}
			)
			.catch(
				err => {
					this.customers.splice(this.customers.indexOf(customer), 1);
				}
			);
	}

	getCustomerList() {
		return this.customers.slice();
	}

	fetchCustomers() {
		this.storage.get("custAry")
			.then(
				(customers: Customer[]) => {
					this.customers = customers != null ? customers : [];
				}
			);
	}

}