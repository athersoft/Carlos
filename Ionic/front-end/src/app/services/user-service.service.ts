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

  httpHeader: HttpHeaders = new HttpHeaders();

  constructor(private http: HttpClient, private storage: Storage) { }

  async ngOnInit()
  {
    //await this.storage.create();
    //console.log("Storage Created");
    //this.storageCreated = true;
  }
/*
  async isEmailRegistered(body:any): Promise<any>
  {
    try
    {
      if (this.httpHeader.has('email')) this.httpHeader = this.httpHeader.set('email', body.email);
      else this.httpHeader = this.httpHeader.append('email', body.email);
      const data = await firstValueFrom<any>(this.http.get(this.apiDirection + 'isEmailRegistered', { headers: this.httpHeader }));
      return data.response;
    }
    catch (error)
    {
      console.error("Error in get user: ", error);
      return null;
    }
  }
*/
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
      //console.log("Token data: ", data.token);
      if (data && data.token)
      {
        this.loggedIn = true;
        this.token = data.token.token;
        //await this.storage.set('loggedIn', true);
        //await this.storage.set('token', data.token);
        this.httpHeader = this.httpHeader.append('token', this.token);
      }
      return data;
    }
    catch (error)
    {
      console.error("Error in logIn: ", error);
      return null;
    }
  }

  async logOut(): Promise<any>
  {
    this.loggedIn = false;
    this.token = '';
  }

  async signUp(body:Object): Promise<any>
  {
    //if (!this.storageCreated) await this.ngOnInit();
    try
    {
      const data = await firstValueFrom<any>(this.http.post(this.apiDirection + 'signUp', body));
      //console.log("In Sign Up = ", data);
      if (data && data.token)
        {
          this.loggedIn = true;
          this.token = data.token.token;
          //await this.storage.set('loggedIn', true);
          //await this.storage.set('token', data.token);
          this.httpHeader = this.httpHeader.append('token', this.token);
        }
      return data;
    }
    catch (error)
    {
      console.error("Error in Sign Up: ", error);
      return null;
    }
  }

  async modifyAccount(body:Object): Promise<any>
  {
    try
    {
      const data = await firstValueFrom<any>(this.http.put(this.apiDirection + 'modifyAccount', body, { headers: this.httpHeader }));
      if (data && data.token)
      {
        this.loggedIn = true;
        this.token = data.token.token;
        //await this.storage.set('loggedIn', true);
        //await this.storage.set('token', data.token);
        this.httpHeader = this.httpHeader.append('token', this.token);
      }
      return data;
    }
    catch (error)
    {
      console.error("Error in Modify Account: ", error);
      return null;
    }
  }
  
  async deleteAccount(): Promise<any>
  {
    //console.log("Deleting account");
    if (!this.loggedIn)
    {
      console.error("Error in get user: Not logged in");
      return null;
    }

    try
    {
      console.log("Getting user from token");      
      const userData = await firstValueFrom<any>(this.http.delete(this.apiDirection + 'deleteAccount', { headers: this.httpHeader } ));
      console.log("Del Data: ", userData);

      return userData.response;
    }
    catch (error)
    {
      console.error("Error in delete account: ", error);
      return null;
    }
  }
}
