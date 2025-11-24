import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email = '';
  password = '';
  loading = false;
  errorMessage = '';

  constructor(private auth: AuthService, private router: Router) {}

  async submitLogin() {
    this.loading = true;
    this.errorMessage = '';

    try {
      const res = await this.auth.login({ email: this.email, password: this.password });
      if (res) {
        this.router.navigate(['/dashboard']);
      }
    } catch (err) {
      this.errorMessage = 'Invalid login details';
    }

    this.loading = false;
  }
}
