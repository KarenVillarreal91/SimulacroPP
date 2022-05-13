import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simulacroPP';

  constructor(public userService:UserService, private router:Router)
  {}

  async LogOut()
  {
    this.userService.LogOut()
    .then(()=>{
      this.userService.userLogueado = false;
      this.router.navigateByUrl('login');
    });
  }
}
