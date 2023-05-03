import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { AppRoutingModule } from './app-routing.module'; // CLI imports

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { CardComponent } from './card/card.component';
import { CardsComponent } from './cards/cards.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginformComponent } from './loginform/loginform.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { BooktrekComponent } from './booktrek/booktrek.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const rountes: Routes = [
  // {
  //   path: '',
  //   component: HeaderComponent,
  // },
  {
    path: 'Available treks',
    component: CardComponent,
  },
  {
    path: 'registor',
    component: RegistrationComponent,
  },
  {
    path: 'login',
    component: LoginformComponent,
  },
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    CardsComponent,
    RegistrationComponent,
    LoginformComponent,
    UserdashboardComponent,
    BooktrekComponent,
    UserProfileComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(rountes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
