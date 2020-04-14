import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Route1Component } from './route1/route1.component';

const routes: Routes = [{ path: 'route1', component: Route1Component }];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
