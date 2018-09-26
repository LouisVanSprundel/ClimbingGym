import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  errorMessage: string;
  successMessage: string;
  constructor(private authService: AuthService,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.registerForm = this.formBuilder.group({
      email:  ['', Validators.required],
      password:  ['', Validators.required]
    });
  }
  onSubmitForm() {
    this.authService.doRegister(this.registerForm.value)
      .then(res => {
        console.log(res);
        this.errorMessage = '';
        this.successMessage = 'Your account has been created';
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
        this.successMessage = '';
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
}
