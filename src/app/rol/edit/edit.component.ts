import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/models/role';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  model!: Role;

  constructor() { }

  ngOnInit(): void {
    this.model = new Role(2, 'aasd', 'asd');
  }
  EditRole($event: any): void {
    console.log('edit button pressed', $event);
  }
}
