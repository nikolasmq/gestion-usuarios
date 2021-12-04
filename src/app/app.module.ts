import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from 'src/app/app.routing';
import { HttpClientModule} from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/include/footer/footer.component';
import { HeaderComponent } from './components/include/header/header.component';
import { MenuComponent } from './components/include/menu/menu.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [	
    AppComponent,
      FooterComponent,
      HeaderComponent,
      MenuComponent,
      HomeComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
