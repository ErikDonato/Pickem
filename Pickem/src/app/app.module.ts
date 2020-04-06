import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularMaterialModule } from './angular-material-module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, NoopAnimationsModule, AngularMaterialModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
