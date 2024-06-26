import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alert-page',
  templateUrl: './alert-page.page.html',
  styleUrls: ['./alert-page.page.scss'],
})
export class AlertPagePage implements OnInit {

  constructor(private userService:UserService, private router:Router) { }

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
}
