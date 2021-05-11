import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  passwordRegExp = /(?:[A-Za-z].*?\d|\d.*?[A-Za-z])/;
  emailRegExp = /^([\w\.\+]{1,})([^\W])(@)([\w]{1,})(\.[\w]{1,})+$/;

  loginForm = this.formBuilder.group({
    email: [
      '',
      [
        Validators.email,
        Validators.required,
        Validators.pattern(this.emailRegExp),
      ],
    ],
    password: [
      '',
      [
        Validators.pattern(this.passwordRegExp),
        Validators.required,
        Validators.minLength(8),
      ],
    ],
    firstname: ['', [Validators.required, Validators.minLength(2)]],
    lastname: ['', [Validators.required, Validators.minLength(2)]],
  });
  loading: boolean;
  submitted: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}
  onSubmit() {
    this.loading = true;
    console.log('onSubmit login form');
    this.submitted = true;

    this.authService.signup(this.loginForm.value).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );

    this.router.navigate(['dashboard']);
  }
}
