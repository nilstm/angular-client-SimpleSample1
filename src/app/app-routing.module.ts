import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Tester1Component } from './tester1/tester1.component';
import { HelpComponent } from './help/help.component';

const routes: Routes = [
  {
    component: Tester1Component,
    path: ''
  },
  { path: 'help', component: HelpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
