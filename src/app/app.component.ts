import { FormControl, FormGroup } from '@angular/forms';
import { amortizationPeriodMonths, amortizationPeriodYears, paymentFrequency, prePaymentFrequency, terms } from './constants/mortgage.constants';

import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'mortgage-calculator';
	mortgageVal = 10321312
	mortgageAVal = 121786
	readonly amortizationPeriodYears = amortizationPeriodYears;
	readonly amortizationPeriodMonths = amortizationPeriodMonths;
	readonly paymentFrequency = paymentFrequency;
	readonly prePaymentFrequency = prePaymentFrequency;
	readonly terms = terms;

	mortgageCalculator!: FormGroup;

	constructor() { }

	ngOnInit() {
		this.initializeMortgageCalculator();
	}

	initializeMortgageCalculator() {
		this.mortgageCalculator = new FormGroup({
			paymentPlan: this.paymentPlan,
			prepaymentPlan: this.prePaymentPlan
		})
	}

	calculate() {
		console.log(this.mortgageCalculator.getRawValue())
	}

	get paymentPlan() {
		return new FormGroup({
			mortgageAmount: new FormControl(),
			interestRate: new FormControl(),
			amortizationPeriodYears: new FormControl(),
			amortizationPeriodMonths: new FormControl(),
			paymentFrequency: new FormControl(),
			term: new FormControl()
		})
	}

	get prePaymentPlan() {
		return new FormGroup({
			prepaymentAmount: new FormControl(),
			prePaymentFrequency: new FormControl(),
			startWithPayment: new FormControl()
		})
	}



}
