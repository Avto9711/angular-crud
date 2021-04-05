import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { ShowComponent } from './show/show.component';
import { UserRoutingModule } from './rol-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { RolFormComponent } from './rol-form/rol-form.component';



@NgModule({
  declarations: [
    EditComponent,
    AddComponent,
    ListComponent,
    ShowComponent,
    RolFormComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    DataTablesModule,
    FormsModule
  ],
  exports: [ShowComponent]
})
export class RolModule { }
