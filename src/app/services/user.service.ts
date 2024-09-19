import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  login(data: any) {
    this.http
      .post('http://localhost:5000/login', data)
      .subscribe((result: any) => {
        localStorage.setItem('token', result.token);
        console.log(result);
      });
  }
  profile() {
    let headers = new HttpHeaders().set(
      'Authorization',
      `bearer ${localStorage.getItem('token')}`
    );
    this.http
      .post('http://localhost:5000/profile', {}, { headers: headers })
      .subscribe((result: any) => {
        console.log(result.user);
      });
  }
}
