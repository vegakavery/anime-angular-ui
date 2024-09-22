import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { hide } from '@popperjs/core';
import { HomeLayoutComponent } from './home/home-layout/home-layout.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeLayoutComponent },
  // { path: "comic/:id", component: ComicDetailsComponent },
  { path: "**", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
