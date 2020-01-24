import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/auth/services/auth.service';
import { TokenService } from 'src/app/auth/services/token.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  private error = null;
  loginForm: FormGroup;

  constructor(
    private auth: AuthService,
    private token: TokenService,
    private router: Router,
    private formbuilder: FormBuilder,
  ) {

    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('')
    });
  }

  onSubmit() {
    this.auth.login(this.loginForm.value).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error));
  }

  handleResponse(data) {
    this.token.handle(data.access_token);
    this.auth.changeAuthStatus(true);
    this.router.navigateByUrl('/admin');
  }

  handleError(error) {
    this.error = error.error.errors;
  }

  getErrorMessage() {
    return this.loginForm.controls.username.hasError('required') ? 'This field cannot be blank' : '';
  }
  ngOnInit() {
  }

}
