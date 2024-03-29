import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyTestComponent } from './my-test/my-test.component';
import { HttpClientModule } from '@angular/common/http';
import { MyTesttwoComponent } from './my-testtwo/my-testtwo.component';


@NgModule({
  declarations: [
    AppComponent,
    MyTestComponent,
    MyTesttwoComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
