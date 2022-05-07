import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; 
import { PagesModule } from './pages/pages.module'; 
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [BrowserModule,AppRoutingModule,PagesModule, CommonModule, RouterModule, AuthModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
