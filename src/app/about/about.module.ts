import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from './about-routing.module';
import { ComponentThreeComponent } from '../component-three/component-three.component';
import { AboutComponent } from './about.component';
import { SharedModule } from '../shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AboutRoutingModule
  ],
  declarations: [AboutComponent, ComponentThreeComponent]
})
export class AboutModule { }