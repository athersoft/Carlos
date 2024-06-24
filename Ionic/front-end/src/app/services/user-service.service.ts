import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

interface User {
  id: number;
  name: string;
  email: string;
  run: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  apiDirection:string = 'http://localhost:5001/';

  async logIn(body:Object): Promise<any>
  {
    try
    {
      const data = await firstValueFrom(this.http.post(this.apiDirection + 'users/login', body));
      console.log("In logIn = ", data);
      return data;
    }
    catch (error)
    {
      console.error("Error in logIn: ", error);
      return null;
    }
    /*
    this.http.post(this.apiDirection+'users/login', body).subscribe(data =>
      {
        console.log("In logIn = ", data);
        return data;
      }
    );
    */
  }
}
