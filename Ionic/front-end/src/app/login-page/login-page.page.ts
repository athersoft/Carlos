import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { FormError, errorMsg } from '../misc/form-errors';
import { UserService } from '../services/user-service.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { RecaptchaModule, RecaptchaFormsModule } from "ng-recaptcha";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {
  loginForm: FormGroup;
  wrongLoginMessage:string = "";
  isCaptchaValid = true;

  constructor(
    private form:FormBuilder,
    private userService:UserService,
    private router: Router
  )
  {
    this.loginForm = this.form.group
    ({
      email: ['', [Validators.required, Validators.email, Validators.maxLength(50)]],
      password: ['',[Validators.required, Validators.minLength(6), Validators.maxLength(50)]],
    });
  }

  ngOnInit()
  {
  }

  async ionViewDidEnter()
  {
    // If a session is already active, go directly to the tabs
    if ((await this.userService.sessionExists()).valueOf())
    {
      console.log("A session already exists");
      this.router.navigate(['/tabs/tab1']);
    }
  }

  get btnColor()
  {
    return this.isCaptchaValid && this.loginForm.valid ? 'primary' : 'tertiary';
  }
  get btnText()
  {
    //return this.loginForm.valid ? 'Sign Up!' : 'You must fill all the fields';
    return 'Log In';
  }
  get canLogIn()
  {
    return this.isCaptchaValid && this.loginForm.valid;
  }
  get cantLoginMessage()
  {
    return this.wrongLoginMessage;
  }

  async LoginValidation()
  {
    //console.log("Login Form = ",this.loginForm.value);
    this.wrongLoginMessage = "";

    try
    {
      const loginReturn = await this.userService.logIn(this.loginForm.value);
      //console.log("Login returned = ", loginReturn);

      if (loginReturn)
      {
        console.log("Logged in successfully");
        this.router.navigate(['/tabs/tab1']);
      }
      else
      {
        console.log("Account does not exist or the data is wrong.");
        this.wrongLoginMessage = "Account does not exist or the data is wrong.";
      }
    } catch (error) {
      console.error("Login error: ", error);
    }
  }

  formError(field: string): string | null
  {
    if (this.loginForm.get(field)!.errors)
    {
      const error: FormError = Object.keys(this.loginForm.get(field)!.errors!)[0] as FormError;
      return errorMsg[error];
    }
    
    return null;
  }

  get siteKey()
  {
    return environment.recaptcha.siteKey;
  }

  captchaResolved(event:(string|null))
  {
    console.log("Captcha Resolved", event);
    this.isCaptchaValid = true;
  }
}
