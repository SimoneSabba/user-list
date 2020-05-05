import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, take } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ApiResponse } from '../interfaces/api-response.interface';
import { User, UserApi } from '../interfaces/user.interface';
const dataJSON = 'assets/users.json';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _users = new Subject<User[]>();
  private users: User[];
  users$ = this._users.asObservable();
  
  constructor(private readonly http: HttpClient) {}

  publish(users: User[]): void {
    this._users.next(users);
  }

  getUsers(): void {
    this.http.get<ApiResponse>(dataJSON).pipe(
      take(1),
      map(
        (res: ApiResponse) => res.list.entries.map(
          (user: UserApi) => user.entry
        )
      )
    ).subscribe(
      (users: User[]) => {
        this.users = users;
        this.publish(users);
      }
    );
  }

  deleteUser(userToDelete: User): void {
    this.users = this.users.filter(
      (user: User) => user.id !== userToDelete.id
    )
    this.publish(this.users);
  }
}
