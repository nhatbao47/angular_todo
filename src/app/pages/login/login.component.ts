import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'login-page',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });
  loginError = false;

  constructor(private authService: AuthService, private route: Router) {}

  onSubmit() {
    let user = this.loginForm.getRawValue();
    if (this.authService.login(user.email ?? '', user.password ?? '')) {
      this.route.navigate(['/todos']);
    } else {
      this.loginError = true;
    }
  }
}
