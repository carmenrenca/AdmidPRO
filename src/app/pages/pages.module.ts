import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BreadcrumbsComponent } from '../shared/breadcrumbs/breadcrumbs.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficalComponent } from './grafical/grafical.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module'; 

@NgModule({
  declarations: [
    DashboardComponent,
    BreadcrumbsComponent,
    ProgressComponent,
    GraficalComponent,
    PagesComponent,
  ],
  imports: [CommonModule, SharedModule, AppRoutingModule, FormsModule,ComponentsModule ],
  exports: [
    DashboardComponent,
    BreadcrumbsComponent,
    ProgressComponent,
    GraficalComponent,
    PagesComponent,
  ],
})
export class PagesModule {}
