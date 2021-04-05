import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ShowComponent } from './show/show.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [
    {
        path: 'users',
        component: ShowComponent,
        children: [
          {
            path: 'add',
            component: AddComponent
          },
          {
            path: 'edit/:id',
            component: EditComponent
          },
          {
            path: 'list',
            component: ListComponent
          }
        ]
      }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
