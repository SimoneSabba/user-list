import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../interfaces/api-response.interface';
import { User, UserApi } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  dataJSON = 'assets/users.json';
  constructor(private readonly http: HttpClient) { }

  /**
   * 
   * @description read JSON file
   */
  getJSON(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.dataJSON);
  }

  /**
   * 
   * @param res API response object 
   * @return  the array containing users data
   */
  getUsers(res: ApiResponse): User[] {
    return res.list.entries.map(
      (user: UserApi) => user.entry
    )
  }

  /**
   * 
   * @param users array of users 
   * @param userToDelete user to delete from the array
   * @return new array without the user to delete if existing, same array otherwise 
   */
  deleteUser(users: User[], userToDelete: User): User[] {
    return users.filter(
      (user: User) => user.id !== userToDelete.id
    )
    
  }
}
