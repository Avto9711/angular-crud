import { AfterViewInit, Component, OnInit, Renderer2, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';

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
      data: [{id: 1, firstName: 'Angel', lastName: 'Torres', username: 'avto9711', email: 'avto9711@gmail.com'}],
      columns: [{
        title: 'ID',
        data: 'id'
      }, {
        title: 'First name',
        data: 'firstName'
      }, {
        title: 'Last name',
        data: 'lastName'
      }, {
        title: 'User Name',
        data: 'username'
      }, {
        title: 'Email',
        data: 'email'
      }, {
        title: 'Action',
        render:  (data: any, type: any, full: any) => {

          return `
          <button view-edit-user-id=${full.id} class="btn btn-success"> Edit </button>
          <button view-delete-user-id=${full.id} class="btn btn-danger"> Delete </button>
                  `;
        }
      }]
    };
  }

  ngAfterViewInit(): void {
   this.listenerFn = this.renderer.listen('document', 'click', (event) => {
      event.stopPropagation ();
      if (event.target.hasAttribute('view-edit-user-id')) {
        this.router.navigate(['users/edit/' + event.target.getAttribute('view-edit-user-id')]);
      } else if (event.target.hasAttribute('view-delete-user-id')) {
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
