import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
constructor(private route:Router){}

email: string = '';
password: string = '';

  predefinedEmail: string = 'test@example.com';
  predefinedPassword: string = 'password';

  login() {
    // console.log('Email entered:', this.email);
    // console.log('Password entered:', this.password);

    if (this.email === this.predefinedEmail && this.password === this.predefinedPassword) {
      console.log('Login successful');
      this.route.navigate(['/home'])
    } else {
      console.log('Login failed. Incorrect email or password.');
    }
  }
}
