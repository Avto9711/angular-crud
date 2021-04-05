import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/models/role';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  model = new Role(0, '', '');

  constructor() { }

  ngOnInit(): void {
  }

  AddRole($event: any): void {
    console.log($event);
  }

}
