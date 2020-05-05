import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../../services/user.service';
import { UserListComponent } from './user-list.component';
import { mockResponse } from '../../mocks/dataApi.mock';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let compiled: HTMLHtmlElement;
  const users = [{
    id: '1',
    firstName: 'Luke',
    lastName: 'Skywalker',
    enabled: true,
  },
  {
    id: '2',
    firstName: 'Leia',
    lastName: 'Skywalker',
    enabled: false,
  }];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListComponent ],
      providers: [UserService],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.users = users;
    compiled = fixture.nativeElement;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  describe('should render ', () => {

    it('the user list with right number of users', () => {
      fixture.detectChanges();
      const chipsEl = compiled.querySelectorAll('.userList__item');
      expect(chipsEl.length).toBe(2);
    });

    it('the chip with a different style if user is enabled', () => {
      fixture.detectChanges();
      const chipsEl = compiled.querySelectorAll('.userList__item');
      expect(chipsEl[0].classList.contains('userList__item--enabled')).toBe(users[0].enabled);
      expect(chipsEl[1].classList.contains('userList__item--enabled')).toBe(users[1].enabled);
    });

    it('the chip with a delete icon if user is enabled', () => {
      fixture.detectChanges();
      const chipsEl = compiled.querySelectorAll('.userList__item');
      expect(chipsEl[0].querySelector('mat-icon')).toBeTruthy();
      expect(chipsEl[0].querySelector('mat-icon').textContent).toBe('cancel');
      expect(chipsEl[1].querySelector('mat-icon')).toBeNull();
    });
  })

  
});
