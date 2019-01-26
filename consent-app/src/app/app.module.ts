import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GiveConsentComponent } from './pages/give-consent/give-consent.component';
import { ConsentsComponent } from './pages/consents/consents.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
	declarations: [
		AppComponent,
		GiveConsentComponent,
		ConsentsComponent,
		NotFoundComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
