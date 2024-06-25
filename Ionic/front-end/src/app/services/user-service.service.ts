import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Storage } from '@ionic/storage-angular';

interface User {
  id: number;
  name: string;
  email: string;
  run: string;
  region: string;
  commune: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loggedIn:boolean = false;
  storageCreated:boolean = false;
  token = '';
  
    apiDirection:string = 'http://localhost:5001/users/';

  constructor(private http: HttpClient, private storage: Storage) { }

  async ngOnInit()
  {
    //await this.storage.create();
    //console.log("Storage Created");
    //this.storageCreated = true;
  }

  async isEmailRegistered(body:any): Promise<any>
  {
    try
    {
      const httpHeader: HttpHeaders = new HttpHeaders({
        email: body.email
      })
      const data = await firstValueFrom<any>(this.http.get(this.apiDirection + 'isEmailRegistered', { headers: httpHeader }));
      return data.response;
    }
    catch (error)
    {
      console.error("Error in get user: ", error);
      return null;
    }
  }

  async sessionExists()
  {
    //if (!this.storageCreated) await this.ngOnInit();
    //console.log("Storage Session Token:", await this.storage.get('token'));
    return this.loggedIn;
  }

  async logIn(body:Object): Promise<any>
  {
    //if (!this.storageCreated) await this.ngOnInit();
    try
    {
      const data = await firstValueFrom<any>(this.http.post(this.apiDirection + 'login', body));
      console.log("Token data: ", data.token);
      if (data)
      {
        this.loggedIn = true;
        this.token = data.token;
        //await this.storage.set('loggedIn', true);
        //await this.storage.set('token', data.token);
      }
      return data;
    }
    catch (error)
    {
      console.error("Error in logIn: ", error);
      return null;
    }
  }

  async signUp(body:Object): Promise<any>
  {
    //if (!this.storageCreated) await this.ngOnInit();
    try
    {
      const data = await firstValueFrom(this.http.post(this.apiDirection + 'signUp', body));
      //console.log("In Sign Up = ", data);
      return data;
    }
    catch (error)
    {
      console.error("Error in Sign Up: ", error);
      return null;
    }
  }
}
