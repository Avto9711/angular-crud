import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ShowComponent } from './show/show.component';

import { UserRoutingModule } from './user-routing.module';
import { ListComponent } from './list/list.component';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    AddComponent,
    EditComponent,
    ShowComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    DataTablesModule
  ],
  exports: [ShowComponent]
})
export class UserModule { }
