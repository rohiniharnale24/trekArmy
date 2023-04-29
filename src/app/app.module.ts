import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { CardComponent } from './card/card.component';
import { CardsComponent } from './cards/cards.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginformComponent } from './loginform/loginform.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, CardComponent, CardsComponent, RegistrationComponent, LoginformComponent, UserdashboardComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
