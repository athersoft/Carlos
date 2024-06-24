import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { FormError, errorMsg } from '../misc/form-errors';
import { UserService } from '../services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {
  loginForm: FormGroup;
  loginSuccessful: boolean;

  constructor(private form:FormBuilder, private userService:UserService, private router: Router)
  {
    this.loginSuccessful = false;
    this.loginForm = this.form.group
    ({
      email: ['', [Validators.required, Validators.email, Validators.maxLength(50)]],
      password: ['',[Validators.required, Validators.minLength(6), Validators.maxLength(50)]],
    });
  }

  ngOnInit() {
  }
  get btnColor()
  {
    return this.loginForm.valid ? 'primary' : 'tertiary';
  }
  get btnText()
  {
    //return this.loginForm.valid ? 'Sign Up!' : 'You must fill all the fields';
    return 'Log In';
  }
  get btnRedirection()
  {
    return this.loginSuccessful ? "['/tabs/tab1']" : "['/login-page']";
  }

  async LoginValidation()
  {
    //Aquí se debería de aplicar la validación de usuario ya existente
    console.log("Login Form = ",this.loginForm.value);

    try {
      const loginReturn = await this.userService.logIn(this.loginForm.value);
      console.log("Login returned = ", loginReturn);
      if (loginReturn)
      {
        console.log("Logged in successfully");
        this.loginSuccessful = true;
        this.router.navigate(['/tabs/tab1']);
      }
      else
      {
        console.log("Account does not exist or the data is wrong.");
        this.loginSuccessful = false;
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
}
