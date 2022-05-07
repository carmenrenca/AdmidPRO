import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRouterModule } from './auth/auth.routing';
import { NopageFoundComponent } from './pages/nopage-found/nopage-found.component';
import { PageRouterModule } from './pages/pages.routing';

const routes: Routes = [
  //path: '/dashboard' PageRouterModule
  //path: '/auth' AuthRouterModule
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  { path: '**', component: NopageFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes), AuthRouterModule, PageRouterModule],

  exports: [RouterModule],
})
export class AppRoutingModule {}
