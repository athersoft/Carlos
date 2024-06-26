import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormError, errorMsg } from '../misc/form-errors';

import { rutValidator, passwordMatchValidator } from '../misc/form-validators';
import { RegionesService } from '../services/regiones.service';

import { Router } from '@angular/router';
import { UserService } from '../services/user-service.service';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

interface Region {
  id: string;
  nombre: string;
  numero: number;
  comunas: string[];
}

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.page.html',
  styleUrls: ['./account-page.page.scss'],
})
export class AccountPagePage implements OnInit {

  @ViewChild('regionDropdown', { static: false }) regionDropdown?: ElementRef;
  editForm: FormGroup;

  regiones: Region[] = [];
  comunas: string[] = [];

  emailExistsMessage:string = "";

  constructor(
    private form:FormBuilder,
    private regionService: RegionesService,
    private userService:UserService,
    private router: Router
  )
  {
    this.editForm = this.form.group
    ({
      name: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      run: ['', [Validators.required, rutValidator]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(50)]],
      password: ['',[Validators.required, Validators.minLength(6), Validators.maxLength(50)]],
      passwordConfirm: ['',[Validators.required, passwordMatchValidator]]
    });
  }

  ngOnInit() {
  }

  async ionViewDidEnter()
  {
    // If a session NOT active, go directly to the title
    if (!(await this.userService.sessionExists()).valueOf())
    {
      console.log("You need to use an account.");
      this.router.navigate(['/title-page']);
    }
  }

  logOut()
  {
    this.userService.logOut();
    console.log("Logged out successfully");
    this.router.navigate(['/title-page']);
  }

  get btnColor()
  {
    return this.editForm.valid ? 'primary' : 'tertiary';
  }
  get btnText()
  {
    return this.editForm.valid ? 'Modify' : 'You must fill all the fields';
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
    const region = this.editForm.get('region')!.value;

    this.comunas = this.regiones.find(r => r.numero === region)!.comunas;
    if (this.comunas.length > 0) {
      this.editForm.get('commune')!.enable();
    }
    else this.editForm.get('commune')!.disable();
  }

  // Se ejecuta cuando se envía el formulario
  async modificationValidation()
  {
    //console.log("Login Form = ",this.signupForm.value);
    this.emailExistsMessage = "";

    try
    {
      const modReturn = await this.userService.modifyAccount(this.editForm.value);
      console.log("mod returned = ", modReturn);

      if (modReturn)
      {
        console.log("Modified successfully");
      }
      else
      {
        console.log("This email is already registered.");
        this.emailExistsMessage = "This email is already in use!";
      }
    } catch (error) {
      console.error("Modification error: ", error);
    }
  }

  formError(field: string): string | null
  {
    if (this.editForm.get(field)!.errors)
    {
      const error: FormError = Object.keys(this.editForm.get(field)!.errors!)[0] as FormError;
      return errorMsg[error];
    }
    
    return null;
  }

  @ViewChild(IonModal)
  modal!: IonModal;

  
  message = '';
  name!: string;
  
  cancelEdit()
  {
    this.modal.dismiss(null, 'cancel');
    this.modal.isOpen = false;
  }

  confirmEdit()
  {
    this.modal.dismiss(this.name, 'confirm');
    this.modal.isOpen = false;
  }

  onWillDismissEdit(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      // Here it should rewrite the original data with the new one as it was edited
      this.modal.isOpen = false;
    }
  }

  openModal()
  {
    this.modal.isOpen = true;
  }

  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'Confirm',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
      },
    },
  ];

  async confirmDelete(ev:any) {
    console.log(`Dismissed with role: ${ev.detail.role}`);
    if (ev.detail.role == 'confirm')
    {
      console.log("Do the deletion");
      const deleteReturn = await this.userService.deleteAccount();
      if (deleteReturn)
      {
        console.log("Deleted successfully");
        this.router.navigate(['/title-page']);
      }
    }
  }
}
