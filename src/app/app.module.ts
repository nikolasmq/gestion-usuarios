import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/include/footer/footer.component';
import { HeaderComponent } from './components/include/header/header.component';
import { MenuComponent } from './components/include/menu/menu.component';

@NgModule({
  declarations: [	
    AppComponent,
      FooterComponent,
      HeaderComponent,
      MenuComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
