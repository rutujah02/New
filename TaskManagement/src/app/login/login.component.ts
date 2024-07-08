import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
constructor(private route:Router, private api:ApiserviceService){}

email: string = '';
password: string = '';
message:string = '';

  login() {
    this.api.login(this.email, this.password).subscribe((data) => {
      console.log(data);
        if (data.status === 'success') {
          // Redirect to home page
          this.route.navigate(['/home']);
        } else {
          this.message = data.message;
        }
          })
  }
}
