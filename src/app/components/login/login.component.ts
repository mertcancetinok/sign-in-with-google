import { Component, OnInit } from '@angular/core';
import {  FormBuilder,FormGroup,Validators } from "@angular/forms";
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  socialUser:SocialUser;
  isLoggedin:boolean=false;
  constructor(
    private formBuilder: FormBuilder,
    private socialAuthService: SocialAuthService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = (user != null);
      console.log(this.socialUser);
    });
  }
  loginWithGoogle():void{
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  };

  logOut():void{
    this.socialAuthService.signOut();
  }
}
