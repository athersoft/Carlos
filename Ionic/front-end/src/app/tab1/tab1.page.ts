import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private userService:UserService, private router:Router) { }

  async ionViewDidEnter()
  {
    // If a session NOT active, go directly to the title
    if (!(await this.userService.sessionExists()).valueOf())
    {
      console.log("You need to use an account.");
      this.router.navigate(['/title-page']);
    }
  }

}
