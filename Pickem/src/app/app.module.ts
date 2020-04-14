import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularMaterialModule } from './angular-material-module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Route1Component } from './route1/route1.component';

@NgModule({
	declarations: [AppComponent, Route1Component],
	imports: [BrowserModule, AppRoutingModule, NoopAnimationsModule, AngularMaterialModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
