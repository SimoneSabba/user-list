import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users$: Observable<User[]> = this.userService.users$;

  constructor(private readonly userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers();
  }

  removeUser(userToDelete: User) {
    this.userService.deleteUser(userToDelete);
  }

}
