import { PageNotFoundComponent } from './../PageNotFound/PageNotFound.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ShellyListComponent } from './../shelly-list/shelly-list.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { RouterModule, Routes } from '@angular/router';
import { ShellyListitemComponent } from './../shelly-listitem/shelly-listitem.component';

const appRoutes: Routes = [

   {
     path: 'Shellies',
     component: ShellyListComponent
   },
   { path: '',
     redirectTo: '/Shellies',
     pathMatch: 'full'
   }
   ,
  { path: '**', component: PageNotFoundComponent }
  
 ];


@NgModule({
   declarations: [
      AppComponent,
      ShellyListComponent,
      ShellyListitemComponent
   ],
   imports: [
      RouterModule.forRoot(
         appRoutes,
         { enableTracing: true } // <-- debugging purposes only
       ),
      BrowserModule,
      MatCardModule,
      MatGridListModule,
      MatButtonModule,
      MatMenuModule,
      MatToolbarModule,
      MatIconModule,
      MatMenuModule,
      BrowserAnimationsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
