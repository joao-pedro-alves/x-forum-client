import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
// import { AppRoutes } from './routes';
import { IndexPageComponent } from './index-page/index-page.component';

export const AppRoutes: Routes = [
  { path: '', component: IndexPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
    	AppRoutes,
    	{ enableTracing: true }
    	)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
