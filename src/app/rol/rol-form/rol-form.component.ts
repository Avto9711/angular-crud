import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Role } from 'src/app/models/role';

@Component({
  selector: 'app-rol-form',
  templateUrl: './rol-form.component.html',
  styleUrls: ['./rol-form.component.css']
})
export class RolFormComponent implements OnInit {

  model!: Role;

  @Input()
  role!: Role;

  @Output() userEmittedEvent = new EventEmitter<Role>();
  constructor() { }

  ngOnInit(): void {
    this.model = new Role(this.role.id, this.role.roleName, this.role.roleDescription);
  }

  onSubmit(): void {
    this.userEmittedEvent.emit(Object.assign({}, this.model));
  }


}
