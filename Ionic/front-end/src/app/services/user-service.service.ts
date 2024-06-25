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
  token = '';
  
    apiDirection:string = 'http://localhost:5001/users/';

  constructor(private http: HttpClient, private storage: Storage) { }

  async ngOnInit()
  {
    await this.storage.create();
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

  sessionExists()
  {
    return this.loggedIn;
  }

  async logIn(body:Object): Promise<any>
  {
    try
    {
      const data = await firstValueFrom<any>(this.http.post(this.apiDirection + 'login', body));
      console.log("Token data: ", data.token);
      if (data)
      {
        this.loggedIn = true;
        this.token = data.token;
        await this.storage.set('name', 'Mr. Ionitron');
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
