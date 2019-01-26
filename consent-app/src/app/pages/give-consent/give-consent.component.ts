import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
	selector: 'app-give-consent',
	templateUrl: './give-consent.component.html',
	styleUrls: ['./give-consent.component.scss']
})
export class GiveConsentComponent implements OnInit {

	constructor(private _formBuilder: FormBuilder) { }

	public giveConsentForm: FormGroup;
	public submitted = false;

	ngOnInit() {
		this.giveConsentForm = this._formBuilder.group({
			name: ['', Validators.required],
			email: ['', Validators.required],
			newsletter: [false, Validators.required],
			ads: [false, Validators.required],
			stats: [false, Validators.required],
		});
	}

	isFormValid() {
		return this.giveConsentForm.valid && this.isConsentGiven();
	}

	isConsentGiven() {
		return this.giveConsentForm.get('newsletter').value ||
			this.giveConsentForm.get('ads').value ||
			this.giveConsentForm.get('stats').value;
	}

	onSubmit() {
		this.submitted = true;

		if (this.isFormValid()) {

		} else {
			Object.keys(this.giveConsentForm.controls).forEach(field => {
				const control = this.giveConsentForm.get(field);
				control.markAsTouched({ onlySelf: true });
			});
		}
	}

	onClick() {
		console.log('click');
	}
}
