import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {
  loginForm: FormGroup;
  isSubmitted = false;

  constructor(
    private formBuilder: FormBuilder, 
    private authService: AuthService, 
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    console.log(this.loginForm.controls);
  }

  ngAfterViewInit() {
    if (this.authService.loggedOut == true) {
      this.toastr.success('Logged out!');   
    }
  }

  get formControls() {
    return this.loginForm.controls;
  }

  onSubmit() {
  this.isSubmitted = true;

  if(this.loginForm.invalid) {
    return;
  }

  this.authService.login();
  }
}
