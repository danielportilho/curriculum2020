import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { ScreenComponent } from './screen/screen.component';

@NgModule({
  declarations: [
    NavbarComponent, 
    ContentComponent, 
    FooterComponent, 
    ScreenComponent
  ],

  exports: [
    NavbarComponent, 
    ContentComponent, 
    FooterComponent,
    ScreenComponent
  ],

  imports: [
    CommonModule
  ]
})
export class ElementsModule { }
