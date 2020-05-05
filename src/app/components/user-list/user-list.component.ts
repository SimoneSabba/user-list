import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Input() users: User[];

  constructor(private readonly userService: UserService) {}

  ngOnInit(): void {}

  removeUser(userToDelete: User) {
    this.users = this.userService.deleteUser(this.users, userToDelete);
  }

}
