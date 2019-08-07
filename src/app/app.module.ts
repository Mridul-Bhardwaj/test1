import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AppRoutingModule } from './routing.model';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserListComponent,
    UserDetailsComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
