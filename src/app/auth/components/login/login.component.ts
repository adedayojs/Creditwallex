import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
  });
  loading: boolean;
  submitted: boolean;
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {}
  onSubmit() {
    this.loading = true;
    console.log('onSubmit login form');
    this.submitted = true;

    this.router.navigate(['dashboard']);
  }
}
