import { Component } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'login-page',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  model: UserModel = new UserModel('', '');
  loginError = false;

  constructor(private authService: AuthService, private route: Router) {}

  onSubmit() {
    if (this.authService.login(this.model.email, this.model.password )) {
      this.route.navigate(['/todos']);
    } else {
      this.loginError = true;
    }
  }
}
