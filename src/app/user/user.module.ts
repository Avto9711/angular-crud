import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ShowComponent } from './show/show.component';

import { UserRoutingModule } from './user-routing.module';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    AddComponent,
    EditComponent,
    ShowComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  exports: [ShowComponent]
})
export class UserModule { }
