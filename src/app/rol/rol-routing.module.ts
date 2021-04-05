import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { ShowComponent } from './show/show.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: 'roles',
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
