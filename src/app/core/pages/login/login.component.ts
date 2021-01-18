import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router }                             from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group( {
      email: [ '', Validators.required ],
      pass: [ '', Validators.required ]
    });    
  }

  formSubmit(): void {
    if ( this.loginForm.valid ) {
      const { email, pass } = this.loginForm.value;
      this.authService.login(email, pass).subscribe(res => {
        this.router.navigate( [ '/dashboard' ] ).then();
      }, res => {
        console.log('Error login');
      });
    }
  }
}
