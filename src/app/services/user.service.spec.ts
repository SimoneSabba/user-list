import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { UserService } from './user.service';

import { mockResponse } from '../mocks/dataApi.mock';
import { ApiResponse } from '../interfaces/api-response.interface';
import { map } from 'rxjs/operators';
import { User } from '../interfaces/user.interface';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });

    service = TestBed.inject(UserService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });
  

  it('should get all JSON data object', () => {
    service.getJSON().subscribe((data: ApiResponse) => {
      expect(data.list).toBeTruthy();
      expect(data.list.pagination).toBeTruthy();
      expect(data.list.entries).toBeTruthy();
      expect(data).toBe(mockResponse);
    });

    const req = httpMock.expectOne(service.dataJSON, 'call to api');
    expect(req.request.method).toBe('GET');

    req.flush(mockResponse);

    httpMock.verify();
  });

  it('should get the users from API response', () => {
    service.getJSON().pipe(
      map(service.getUsers)
    )
    .subscribe((users: User[]) => {
      expect(users.length).toBe(3);
      expect(users[0].firstName).toBe('Luke Skywalker');
      expect(users[0].enabled).toBe(true);
      expect(users[0].company).toBeTruthy();
      expect(users[1].firstName).toBe('Leia Skywalker');
      expect(users[1].enabled).toBe(true);
      expect(users[2].firstName).toBe('Han Solo');
      expect(users[2].enabled).toBe(false);
    });

    const req = httpMock.expectOne(service.dataJSON, 'call to api');
    expect(req.request.method).toBe('GET');

    req.flush(mockResponse);

    httpMock.verify();
  });

  it('should delete an user if exist', () => {
    let users = service.getUsers(mockResponse);
    const userToDelete = users[0];

    expect(users.length).toBe(3);
    users = service.deleteUser(users, userToDelete);
    expect(users.length).toBe(2);
    expect(users.find(user => user.id === userToDelete.id)).toBeUndefined();
  });

  it('should return the same users array if trying to delete a not-existing user', () => {
    let users = service.getUsers(mockResponse);
    const notExistingUser: User = {
      firstName: 'Unicorn',
      id: '11212121',
      emailNotificationsEnabled: false,
      enabled: false
    };

    expect(users.length).toBe(3);
    users = service.deleteUser(users, notExistingUser);
    expect(users.length).toBe(3);
  });
});
