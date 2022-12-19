import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared.module';
import { FormsModule } from '@angular/forms';
import { IDService } from './id.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ComponentOneComponent,
    ComponentTwoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [IDService],
  bootstrap: [AppComponent]
})
export class AppModule { }
