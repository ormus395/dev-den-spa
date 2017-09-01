import { Observable } from 'rxjs/Observable';

export abstract class UserApi {
  register: (
    role: string,
    name: string,
    username: string,
    password: string,
    email: string
  ) => Observable<any>;

  login: (
    username: string,
    password: string,
    rememberMe: boolean
  ) => Observable<any>;

  logout: () => Observable<any>;

  changePassword: (
      username: string, 
      password: string
    ) => Observable<any>;
}