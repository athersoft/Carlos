import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { FormError, errorMsg } from '../misc/form-errors';
// import { AutenticacionService } from '../../services/autenticacion.service';

import { passwordMatchValidator, rutValidator } from '../misc/form-validators';
import { RegionesService } from '../services/regiones.service';

import { UserService } from '../services/user-service.service';
import { Router } from '@angular/router';

interface Region {
  id: string;
  nombre: string;
  numero: number;
  comunas: string[];
}

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.page.html',
  styleUrls: ['./signup-page.page.scss'],
})

export class SignupPagePage implements OnInit
{
  @ViewChild('regionDropdown', { static: false }) regionDropdown?: ElementRef;
  
  signupForm: FormGroup;
  message:string="";

  regiones: Region[] = [];
  comunas: string[] = [];

  emailExistsMessage:string = "";

  // constructor(private form:FormBuilder, private servicio:AutenticacionService)
  // La profesora había dejado lo de AuthenticationService y no se para que funcionay
  constructor(
    private form:FormBuilder,
    private regionService: RegionesService,
    private userService:UserService,
    private router: Router
  )
  {
    this.signupForm = this.form.group
    ({
      name: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      run: ['', [Validators.required, rutValidator]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(50)]],
      password: ['',[Validators.required, Validators.minLength(6), Validators.maxLength(50)]],
      passwordConfirm: ['',[Validators.required, passwordMatchValidator]],
      region: ['', Validators.required],
      comuna: [{value: '', disabled: true}, Validators.required],
      tyc: [false, Validators.requiredTrue]
    });
  }

  ngOnInit() {
    this.regionService.getRegiones().subscribe(data => {
      this.regiones = Object.entries(data.regionNumber).map(([key, value]) => ({
        id: key,
        nombre: value.nombre,
        numero: parseInt(key),
        comunas: value.comunas
        }));
    });

    //console.log(this.regiones);
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
    return this.signupForm.valid ? 'primary' : 'tertiary';
  }
  get btnText()
  {
    return this.signupForm.valid ? 'Sign Up' : 'You must fill all the fields';
  }
  get emailAlreadyExistsMessage()
  {
    return this.emailExistsMessage;
  }
/*
  getRegionSelected()
  {
    this.regionSelected = this.regionDropdown?.nativeElement.value;
    return this.regionDropdown?.nativeElement.value;
  }
*/
  onRegionChange()
  {
    const region = this.signupForm.get('region')!.value;

    //console.log(region);

    this.comunas = this.regiones.find(r => r.numero === region)!.comunas;
    if (this.comunas.length > 0) {
      this.signupForm.get('comuna')!.enable();
    }
    else this.signupForm.get('comuna')!.disable();
  }

  // Se ejecuta cuando se envía el formulario
  async SignupValidation()
  {
    //console.log("Login Form = ",this.signupForm.value);
    this.emailExistsMessage = "";

    try
    {
      const signupReturn = await this.userService.signUp(this.signupForm.value);
      console.log("signup returned = ", signupReturn);

      if (signupReturn)
      {
        console.log("Signed in successfully");
        this.router.navigate(['/tabs/tab1']);
      }
      else
      {
        console.log("This email is already registered.");
        this.emailExistsMessage = "This email is already used!";
      }
    } catch (error) {
      console.error("Signup error: ", error);
    }
  }

  formError(field: string): string | null
  {
    if (this.signupForm.get(field)!.errors)
    {
      const error: FormError = Object.keys(this.signupForm.get(field)!.errors!)[0] as FormError;
      return errorMsg[error];
    }
    
    return null;
  }
}
