import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyTesttwoComponent } from './my-testtwo/my-testtwo.component';

const routes: Routes = [
  {
    path:'mytesttwo',
    component:MyTesttwoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
