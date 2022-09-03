import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule,Route } from '@angular/router';
import { CardComponent } from './standAloneComponents';
import { ListComponent } from './standAloneComponents';


const routes:Route[]=[
  {path:'card',component:CardComponent},
  {path:'list',component:ListComponent},
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
