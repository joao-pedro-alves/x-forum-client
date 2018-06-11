import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { ForumListComponent } from './parts/forum-list/forum-list.component';

export const AppRoutes: Routes = [
  { path: '', component: IndexPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    ForumListComponent,
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
