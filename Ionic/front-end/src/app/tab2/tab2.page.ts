import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user-service.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

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
