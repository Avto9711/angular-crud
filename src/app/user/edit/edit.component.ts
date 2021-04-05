import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  model!: User;

  constructor() { }

  ngOnInit(): void {
    this.model = new User(2, 'aasd', 'asd', 'asdss', 'asdasd');
  }
  EditUser($event: any): void {
    console.log('edit button pressed', $event);
  }
}
