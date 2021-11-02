import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchImageComponent } from './components/search-image/search-image.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: ''},
  { path: 'search-image', component: SearchImageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
