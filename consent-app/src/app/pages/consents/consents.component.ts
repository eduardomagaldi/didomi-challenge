import { Component, OnInit } from '@angular/core';
import { ConsentService } from 'src/app/services/consent.service';

@Component({
	selector: 'app-consents',
	templateUrl: './consents.component.html',
	styleUrls: ['./consents.component.scss']
})
export class ConsentsComponent implements OnInit {

	constructor(
		private _consentService: ConsentService
	) {
	}

	consentList: object[];

	ngOnInit() {
		this._consentService.getConsents().subscribe(consentList => {
			console.log(consentList);
			this.consentList = consentList;
		})
	}

}
