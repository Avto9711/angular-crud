import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/models/role';
import { User } from 'src/app/models/user';
import { UserRole } from 'src/app/models/user-role';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  model = new UserRole(null, null, null, '', '');
  users: User[] = [ new User(1, 'adsd', 'dasd', 'asdd', 'sd')];
  roles: Role[] = [ new Role(1, 'asd', 'dasd')];

  constructor() { }

  ngOnInit(): void {
  }


  AddUseRole($event: any): void {
    console.log($event);
  }
}
