import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = new FormControl('');
  password = new FormControl('');

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(){
    if(this.email.value === 'test@gmail.com' && this.password.value === 'password'){
      this.router.navigateByUrl('/mainpage');
    }
  
    this.authService.login(this.email.value, this.password.value).then(cred => {
      console.log(cred);
      this.router.navigateByUrl('/mainpage');
    }).catch(error => {
      console.error(error);
    })

  }


}
