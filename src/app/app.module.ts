import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';


import { EuComponent } from './eu/eu.component';
import { JsimplesComponent } from './jsimples/jsimples.component';
import { JcompostoComponent } from './jcomposto/jcomposto.component';


import { RouterModule } from '@angular/router';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot(
      [

        {path: '', component: EuComponent},
        {path: 'jsimples', component: JsimplesComponent},
        {path: 'jcomposto', component: JcompostoComponent},


      


      ]
    )
  ],
  declarations: [ AppComponent, NavbarComponent, EuComponent, JsimplesComponent, JcompostoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

