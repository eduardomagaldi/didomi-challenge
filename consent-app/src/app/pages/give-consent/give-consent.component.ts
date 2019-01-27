import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ConsentService } from 'src/app/services/consent.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-give-consent',
	templateUrl: './give-consent.component.html',
	styleUrls: ['./give-consent.component.scss']
})
export class GiveConsentComponent implements OnInit {

	constructor(
		private _formBuilder: FormBuilder,
		private _consentService: ConsentService,
		private _router: Router,
	) { }

	public giveConsentForm: FormGroup;
	public submitted = false;
	public consentMap = this._consentService.consentMap;

	ngOnInit() {
		this.giveConsentForm = this._formBuilder.group({
			name: ['', Validators.required],
			email: ['', Validators.compose([Validators.required, Validators.email])],
			consents: this._formBuilder.group({
				newsletter: [false, Validators.required],
				tAds: [false, Validators.required],
				vStats: [false, Validators.required],
			}),
		});
	}

	isFormValid() {
		return this.giveConsentForm.valid && this.isConsentGiven();
	}

	isConsentGiven() {
		let result = false;

		for (const consent in this.consentMap) {
			if (!result) {
				result = this.giveConsentForm.get('consents').get(consent).value;
			}
		}

		return result;
	}

	onSubmit() {
		this.submitted = true;

		if (this.isFormValid()) {
			this._consentService.saveConsent(this.giveConsentForm.value);
			this._router.navigate(['consents']);
		} else {
			Object.keys(this.giveConsentForm.controls).forEach(field => {
				const control = this.giveConsentForm.get(field);
				control.markAsTouched({ onlySelf: true });
			});
		}
	}
}
