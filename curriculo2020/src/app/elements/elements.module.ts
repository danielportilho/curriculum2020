import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    NavbarComponent, 
    ContentComponent, 
    FooterComponent
  ],

  exports: [
    NavbarComponent, 
    ContentComponent, 
    FooterComponent
  ],

  imports: [
    CommonModule
  ]
})
export class ElementsModule { }
