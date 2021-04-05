import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  model!: User;

  @Input()
  user!: User;

  @Output() userEmittedEvent = new EventEmitter<User>();
  constructor() { }

  ngOnInit(): void {
    this.model = new User(this.user.id, this.user.firstName, this.user.lastName, this.user.userName, this.user.email);
  }

  onSubmit(): void {
    this.userEmittedEvent.emit(Object.assign({}, this.model));
  }

}
