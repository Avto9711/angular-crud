import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  model = new User(0, '', '', '', '');

  constructor() { }

  ngOnInit(): void {
  }

  AddUser($event: any): void {
    console.log($event);
  }

}
