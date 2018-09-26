import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  authStatus: boolean;
  loginForm: FormGroup;
  errorMessage: string;
  constructor(private authService: AuthService,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.authStatus = this.authService.isAuth;
    this.initForm();
  }
  initForm() {
    this.loginForm = this.formBuilder.group({
      email:  ['', Validators.required],
      password:  ['', Validators.required]
    });
  }
  onSubmitForm() {
    this.authService.doRegister(this.loginForm.value)
      .then(res => {
        console.log(res);
        this.errorMessage = '';
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
      });
  }
  tryFacebookLogin() {
    this.authService.doFacebookLogin()
      .then(res =>{
          this.router.navigate(['/gym']);
        }, err => console.log(err)
      );
  }
  tryGoogleLogin(){
    this.authService.doGoogleLogin()
      .then(res =>{
          this.router.navigate(['/gym']);
        }, err => console.log(err)
      );
  }
  onSignIn() {
    this.authService.signIn().then(
      () => {
        this.authStatus = this.authService.isAuth;
        this.router.navigate(['gyms']);
      }
    );
  }
  onSignOut() {
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
  }

}
