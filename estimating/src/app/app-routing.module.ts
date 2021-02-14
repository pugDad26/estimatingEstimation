import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooComponent } from './foo/foo.component';
import { BarComponent } from './bar/bar.component';

const routes: Routes = [
  {
    //All of the code for root component should have gone in foo or bar
    //in order to get the behavior I'm looking for.
    path: "app-foo"
    , component: FooComponent 
  }
  , {
    path: "app-bar"
    , component: BarComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
