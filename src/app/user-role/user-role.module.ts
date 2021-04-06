import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ShowComponent } from './show/show.component';
import { ListComponent } from './list/list.component';
import { UserRoleRouting } from './user-role-routing.module';
import { FormsModule } from '@angular/forms';
import { UserRoleFormComponent } from './user-role-form/user-role-form.component';
import { DataTablesModule } from 'angular-datatables';



@NgModule({
  declarations: [
    AddComponent,
    EditComponent,
    ShowComponent,
    ListComponent,
    UserRoleFormComponent,
  ],
  imports: [
    CommonModule,
    UserRoleRouting,
    FormsModule,
    DataTablesModule
  ],
  exports: [ShowComponent]
})
export class UserRoleModule { }
