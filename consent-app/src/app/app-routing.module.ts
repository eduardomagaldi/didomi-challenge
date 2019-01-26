import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GiveConsentComponent } from './pages/give-consent/give-consent.component';
import { ConsentsComponent } from './pages/consents/consents.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
	{ path: 'give-consent', component: GiveConsentComponent },
	{ path: '', redirectTo: 'give-consent', pathMatch: 'full' },
	{ path: 'consents', component: ConsentsComponent },
	{ path: '404', component: NotFoundComponent },
	{ path: '**', redirectTo: '404' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
