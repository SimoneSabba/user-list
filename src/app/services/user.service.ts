import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../interfaces/api-response.interface';
import { User } from '../interfaces/user.interface';
const dataJSON = 'assets/users.json';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private readonly http: HttpClient) { }

  getUsers(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(dataJSON);
  }

  deleteUser(users: User[], userToDelete: User): User[] {
    return users.filter(
      (user: User) => user.id !== userToDelete.id
    )
    
  }
}
