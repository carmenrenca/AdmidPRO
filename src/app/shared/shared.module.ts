import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NopageFoundComponent } from '../pages/nopage-found/nopage-found.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NopageFoundComponent, SidebarComponent, HeaderComponent],
  imports: [CommonModule, AppRoutingModule, RouterModule],

  exports: [NopageFoundComponent, SidebarComponent, HeaderComponent],
})
export class SharedModule {}
