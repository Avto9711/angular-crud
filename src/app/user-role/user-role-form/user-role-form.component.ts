import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Role } from 'src/app/models/role';
import { User } from 'src/app/models/user';
import { UserRole } from 'src/app/models/user-role';

@Component({
  selector: 'app-user-role-form',
  templateUrl: './user-role-form.component.html',
  styleUrls: ['./user-role-form.component.css']
})
export class UserRoleFormComponent implements OnInit {

  model = new UserRole(null, null, null, '', '');
  users: User[] = [ new User(1, 'adsd', 'dasd', 'asdd', 'sd')];
  roles: Role[] = [ new Role(1, 'asd', 'dasd')];

  @Input()
  userRole!: UserRole;

  @Output() userRoleEmittedEvent = new EventEmitter<UserRole>();

  constructor() { }

  ngOnInit(): void {
    this.model = new UserRole(this.userRole.id, this.userRole.userId, this.userRole.roleId, this.userRole.userName, this.userRole.roleName);
  }

  onSubmit(): void {
    this.userRoleEmittedEvent.emit(Object.assign({}, this.model));
  }
}
