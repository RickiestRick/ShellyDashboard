import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MatMenu} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
