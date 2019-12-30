import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page-smart',
  templateUrl: './login-page-smart.component.html',
  styleUrls: ['./login-page-smart.component.css']
})
export class LoginPageSmartComponent implements OnInit {

  form: FormGroup;
  error: string | null;

  constructor(private formBuilder: FormBuilder, private router: Router) {
  }


  ngOnInit() {
    this.error = null;
    this.form = this.formBuilder.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
    this.onLogin();
  }

  onLogin() {
    const username = this.form.get('username').value;
    const password = this.form.get('password').value;
    const user = 'user';
    const pass = '123';
    if (user === 'user' && pass === '123') {
      sessionStorage.setItem('user', user);
      this.router.navigateByUrl('home');
    } else {
      this.router.navigateByUrl('https://www.youtube.com/watch?v=TGIGj3jIC5A');
    }
  }
}


