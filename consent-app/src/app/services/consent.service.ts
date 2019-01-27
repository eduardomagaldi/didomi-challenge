import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ConsentService {

	private _consentDataBS: BehaviorSubject<object[]> = new BehaviorSubject([]);

	private _consentList: object[] = [
		{
			name: 'Eduardo',
			email: 'eduardo@email.com',
			consents: {
				newsletter: false,
				tAds: false,
				vStats: true
			},
		},
		{
			name: 'Martelle',
			email: 'mpoundsford0@bandcamp.com',
			consents: {
				newsletter: true,
				tAds: false,
				vStats: false
			},
		}, {
			name: 'Faina',
			email: 'fcockcroft1@wix.com',
			consents: {
				newsletter: true,
				tAds: true,
				vStats: true
			},
		}, {
			name: 'Norris',
			email: 'nortiger2@mashable.com',
			consents: {
				newsletter: false,
				tAds: true,
				vStats: true
			},
		}, {
			name: 'Manny',
			email: 'mrisbridger3@ox.ac.uk',
			consents: {
				newsletter: false,
				tAds: true,
				vStats: true
			},
		}, {
			name: 'Rhona',
			email: 'rsimacek4@prnewswire.com',
			consents: {
				newsletter: false,
				tAds: true,
				vStats: false
			},
		},
	];

	constructor() {
		this._consentDataBS.next(this._consentList);
	}

	public consentMap: object = {
		newsletter: 'Receive newsletter',
		tAds: 'Be shown targeted ads',
		vStats: 'Contribute to anonymous visit statistics',
	};

	saveConsent(value) {
		this._consentList.unshift(value);
		this._consentDataBS.next(this._consentList);
	}

	getConsents() {
		return this._consentDataBS;
	}
}
