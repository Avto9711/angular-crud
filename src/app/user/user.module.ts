import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ShowComponent } from './show/show.component';

import { UserRoutingModule } from './user-routing.module';
import { ListComponent } from './list/list.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form/user-form.component';
import { UserService } from './services/user.service';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AddComponent,
    EditComponent,
    ShowComponent,
    ListComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    DataTablesModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [ShowComponent],
  providers: [UserService]
})
export class UserModule { }
