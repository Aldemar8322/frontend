import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Credential } from '../../interfaces/credential';
import { LoginService } from '../../services/login.service';

const jwtHelperService = new JwtHelperService();

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  router = inject(Router);
  loginService: LoginService = inject(LoginService);

  credentialsForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  handlesubmit() {
    if(this.credentialsForm.valid) {
      const username = this.credentialsForm.value.username;
      const password = this.credentialsForm.value.password;

      if(typeof username === 'string' && typeof password === 'string') {
        const credential: Credential = {
          username,
          password
        };
        this.loginService.login(credential).subscribe((response: any)=>{
          localStorage.setItem('token', response.datos);
          this.router.navigateByUrl('/shop');
        });
      }
    } else {
        console.log('Error: invalid form');
    }
  }
}
  
