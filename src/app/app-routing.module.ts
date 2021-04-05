import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowComponent as UserShowComponent } from './user/show/show.component';
import { AddComponent as UserAddComponent } from './user/add/add.component';
import { EditComponent as UserEditComponent } from './user/edit/edit.component';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
