import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from "@angular/forms";
import { SocialLoginModule,SocialAuthService, SocialAuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { LoginComponent } from './components/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SocialLoginModule
  ],
  providers: [{
    provide:'SocialAuthServiceConfig',
    useValue:{
      autoLogin:false,
      providers:[{
        id:GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider(
          'your-client-id'
        )
      }]
    } as SocialAuthServiceConfig,
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
