import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form !: FormGroup;

  constructor(private userService: UserService, private router: Router, private fb:FormBuilder) 
  {
    this.userService.userLogueado = false;

    this.form = this.fb.group({
      'email':['', [Validators.required, Validators.email]],
      'password':['', Validators.required]
    });
  }

  ngOnInit(): void {}

  Login()
  {
    this.userService.Login(this.form.value)
    .then((res:any)=>{
      this.userService.userLogueado = true;
      this.router.navigateByUrl('bienvenido');
    });
  }

  InicioAutomatico(email:any, password:any)
  {
    this.form.get('email')?.setValue(email);
    this.form.get('password')?.setValue(password);

    this.Login();
  } 
}
