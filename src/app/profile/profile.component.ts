import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  constructor(private userService: UserService, private router: Router) {}
  ngOnInit() {
    this.userService.profile();
  }
  onLogout() {
    this.router.navigate(['/']);
    localStorage.removeItem('token');
  }
}
