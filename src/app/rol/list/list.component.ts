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
      data: [{id: 1, roleName: 'Angel', roleDescription: 'Torres' }],
      columns: [{
        title: 'ID',
        data: 'id'
      }, {
        title: 'Name',
        data: 'roleName'
      }, {
        title: 'Description',
        data: 'roleDescription'
      }, {
        title: 'Action',
        render:  (data: any, type: any, full: any) => {

          return `
          <button view-edit-role-id=${full.id} class="btn btn-success"> Edit </button>
          <button view-delete-role-id=${full.id} class="btn btn-danger"> Delete </button>
                  `;
        }
      }]
    };
  }

  ngAfterViewInit(): void {
   this.listenerFn = this.renderer.listen('document', 'click', (event) => {
      event.stopPropagation ();
      if (event.target.hasAttribute('view-edit-role-id')) {
        this.router.navigate(['roles/edit/' + event.target.getAttribute('view-edit-role-id')]);
      } else if (event.target.hasAttribute('view-delete-role-id')) {
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
