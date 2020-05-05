import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { Observable } from 'rxjs';
import { User, UserApi } from './interfaces/user.interface';
import { map } from 'rxjs/operators';
import { ApiResponse } from './interfaces/api-response.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private readonly userService: UserService) {}
  users$: Observable<User[]>;

  ngOnInit(): void {
    this.users$ = this.userService.getJSON().pipe(
      map(this.userService.getUsers)
    );
  }
}
