import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GiveConsentComponent } from './pages/give-consent/give-consent.component';
import { ConsentsComponent } from './pages/consents/consents.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	declarations: [
		AppComponent,
		GiveConsentComponent,
		ConsentsComponent,
		NotFoundComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NoopAnimationsModule,
		MatSidenavModule,
		MatButtonModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
