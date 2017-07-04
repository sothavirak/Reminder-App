import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Customer } from '../../models/customer';
import { NgForm } from '@angular/forms';
import { SMS } from '@ionic-native/sms';

@Component({
  selector: 'page-customer',
  templateUrl: 'customer.html',
})
export class CustomerPage implements OnInit {

	customer: Customer;

	constructor(public navParams: NavParams, private sms: SMS) {
	}

	ngOnInit() {
		this.customer = this.navParams.data;
	}

	onSendSMS(form: NgForm) {
		console.log(form.value.message);
		console.log(this.customer.phoneNumber);
		this.sms.send(this.customer.phoneNumber, form.value.message);

	}

}
