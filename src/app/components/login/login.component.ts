import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor() { }

  login() {

    // kullanıcı adı ve şifre kontrolünü burada yapacağız.
    
    console.log("Login button clicked");
  }
}
