import { AfterViewInit, Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, AfterViewInit, OnDestroy {

  dtOptions: DataTables.Settings = {};

  listenerFn!: () => void;

  constructor(private renderer: Renderer2, private router: Router) { }

  ngOnInit(): void {
    this.dtOptions = {
      data: [{id: 1, userName: 'Angel', roleName: 'New Role' }],
      columns: [{
        title: 'ID',
        data: 'id'
      }, {
        title: 'User Name',
        data: 'userName'
      }, {
        title: 'Role Name',
        data: 'roleName'
      }, {
        title: 'Action',
        render:  (data: any, type: any, full: any) => {

          return `
          <button view-edit-user-role-id=${full.id} class="btn btn-success"> Edit </button>
          <button view-delete-user-role-id=${full.id} class="btn btn-danger"> Delete </button>
                  `;
        }
      }]
    };
  }

  ngAfterViewInit(): void {
   this.listenerFn = this.renderer.listen('document', 'click', (event: any) => {
      event.stopPropagation ();
      if (event.target.hasAttribute('view-edit-user-role-id')) {
        this.router.navigate(['user-roles/edit/' + event.target.getAttribute('view-edit-user-role-id')]);
      } else if (event.target.hasAttribute('view-delete-user-role-id')) {
        alert('palomo');
      }
    });

  }

  ngOnDestroy(): void {
    if (this.listenerFn) {
      this.listenerFn();
    }
  }

}
