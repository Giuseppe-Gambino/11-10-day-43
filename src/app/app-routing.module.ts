import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FiatComponent } from './components/fiat/fiat.component';
import { FordComponent } from './components/ford/ford.component';
import { AudiComponent } from './components/audi/audi.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'fiat', component: FiatComponent },
  { path: 'ford', component: FordComponent },
  { path: 'audi', component: AudiComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
