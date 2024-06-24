import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { FormError, errorMsg } from '../misc/form-errors';
import { VictimService } from '../services/victim-service.service';

interface Victim {
  id: number;
  name: string;
  status: number;
}

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  victims: any;
  public results: any;
  public selectedVictim: any;

  constructor(private http: HttpClient, private form:FormBuilder, private victimService:VictimService)
  {
    this.editVictimForm = this.form.group
    ({
      id: ['', Validators.required],
      name: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      status: ['', Validators.required],
    });
  }

  ngOnInit()
  {
    this.http.get('../../assets/json/victims.json').subscribe(data => {
      this.victims = data;
      console.log(this.victims)
      this.results = [...this.victims.victims];
    });
  }

  handleInput(event:Event)
  {
    if (event != null)
    {
      const query = (<HTMLTextAreaElement>event.target)?.value.toLowerCase();
      this.results = this.victims.victims.filter(
        (o:any) => {
          //console.log(o['name'].toString().toLowerCase().indexOf(query));
          return o['name'].toString().toLowerCase().indexOf(query) > -1;
        }
      );
    }
  }

  onClickEdit(event:Event, victim:any)
  {
    console.log(victim);
    this.selectedVictim = victim;
  }

  getStatusColor(status:number)
  {
    //console.log("Function called");
    //console.log(status);
    switch(status)
    {
      case 0:
        return "success";

      case 1:
        return "warning";
        
      case 2:
        return "danger";
      
      default:
        return "secondary";
    }
  }

  getStatusName(status:number)
  {
    //console.log("Function called");
    //console.log(status);
    switch(status)
    {
      case 0:
        return "Safe";

      case 1:
        return "Danger";
        
      case 2:
        return "Grave";
      
      default:
        return "Unknown";
    }
  }

  changeStatus(status:number)
  {
    switch(status)
    {
      case 0:
        console.log("Cambiando a peligro");
        break;
        
      case 1:
        console.log("Cambiando a grave");
        break;
      
      case 2:
        console.log("Cambiando a seguro");
        break;
      
      default:
        console.log("Cambiando a seguro");
        break;
    }
  }

  // Modal things
  
  @ViewChild(IonModal)
  modal!: IonModal;

  message = '';
  name!: string;

  textConfirm = "Confirm";
  textCancel = "Cancel";
  textTitle = "Editting";
  textPlaceholderName = "Name";
  textPlaceholderStatus = "Status";
  
  get phName()
  {
    return this.selectedVictim == null ? this.textPlaceholderName : this.selectedVictim.name;
  }
  get phStatus()
  {
    return this.selectedVictim == null ? this.textPlaceholderStatus : this.getStatusName(this.selectedVictim.status);
  }

  editVictimForm: FormGroup;

  dropListItems = {
    "statuses":
    [
      {
        "value": 0,
        "name": "Safe"
      },
      {
        "value": 1,
        "name": "Danger"
      },
      {
        "value": 2,
        "name": "Grave"
      }
    ]
  }

  onStatusChange()
  {
    const status = this.editVictimForm.get('status')!.value;

    console.log(status);
  }

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

  openModal(victim:Object)
  {
    console.log(victim);
    this.modal.isOpen = true;
    this.selectedVictim = victim;
  }
}