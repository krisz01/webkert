import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { User } from '../User'
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  email = new FormControl('');
  password = new FormControl('');
  passwordAgain = new FormControl('');
  firstName = new FormControl('');
  lastName = new FormControl('');
    


  constructor(private authService: AuthService, private userService: UserService) { }

  ngOnInit(): void {
  }

  register(){
    this.authService.signup(this.email.value, this.password.value).then(cred => {
      console.log(cred);
      const user: User = {
        id: cred.user?.uid as string,
        email: this.email.value,
        username: this.email.value.split('@')[0],
        firtsname: this.firstName.value,
        lastname: this.lastName.value
      };
      this.userService.create(user).then(_ => {
        console.log('User added')
      }).catch(error => {
        console.log(error);
      })
    }).catch(error => {
      console.log(error);
    });
  }
}
