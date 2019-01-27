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

	public consentList: object[];
	public itemsPerPage = 2;
	public page = 0;
	public numOfPages: number;

	ngOnInit() {
		this._consentService.getConsents().subscribe(consentList => {
			consentList.forEach((user) => {
				user['consentArray'] = [];

				for (const consent in user['consents']) {
					if (user['consents'][consent]) {
						user['consentArray'].push(this._consentService.consentMap[consent]);
					}
				}
			});

			this.numOfPages = Math.ceil(consentList.length / this.itemsPerPage);

			this.consentList = consentList;
		});
	}

	array(num: number) {
		return Array(num);
	}

	goToPage(n: number) {
		if (n >= 0 && n < this.numOfPages) {
			this.page = n;
		}
	}
}
