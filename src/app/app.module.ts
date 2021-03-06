import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { NavbarComponent } from './navbar/navbar.component';
import { RolModule } from './rol/rol.module';
import { UserRoleModule } from './user-role/user-role.module';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    RolModule,
    UserRoleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
