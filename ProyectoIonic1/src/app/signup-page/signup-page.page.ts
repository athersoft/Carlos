import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
// import {AutenticacionService} from '../../services/autenticacion.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.page.html',
  styleUrls: ['./signup-page.page.scss'],
})

export class SignupPagePage implements OnInit
{
  @ViewChild('regionDropdown', { static: false }) regionDropdown?: ElementRef;
  regionSelected?: number;
  signupForm:FormGroup;
  message:string="";
  loggedIn=false;

  // constructor(private form:FormBuilder, private servicio:AutenticacionService) {
  // La profesora había dejado lo de AuthenticationService y no se para que funcionay
  constructor(private form:FormBuilder)
  {
    this.signupForm=this.form.group
    ({
      user: ['',[Validators.required, Validators.email]],
      password: ['',Validators.required],
      rut: ['', [Validators.pattern("[0-9]-"),Validators.max(9)]],
      region: ['', [Validators.pattern("[0-16]-"),Validators.max(16)]]
    });
  }

  ngOnInit() { }

  getRegionSelected()
  {
    this.regionSelected = this.regionDropdown?.nativeElement.value;
    return this.regionDropdown?.nativeElement.value;
  }

  LoginValidation()
  {
    if(this.signupForm.get("user")?.value=='pepito' && this.signupForm.get("password")?.value=='123')
    {
      this.message="user esite";
    }

/* 
    this.servicio.IniciarSesion(this.signupForm.get("user")?.value,this.signupForm.get("password")?.value).subscribe(data=>{
       console.log(data);
    });
*/
  }
}
