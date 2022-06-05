import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  error: string[] = [];
  private token: string = '';
  private expiresIn: string = '';

  constructor(private http: HttpClient, private fb: FormBuilder , private router:Router) {
    this.userForm = this.fb.group({
      usuario: ['', Validators.required],
      contraseña: ['', Validators.required],
    });
  }

  logIn = async () => {
    await this.http
      .post('http://localhost:3000/login', this.userForm.value)
      .subscribe({
        next: (res: any) =>{
          this.saveToken(res.token, res.expiresIn);
          this.router.navigate(['home'])},
        error: (e) => {
          if (!this.error.includes(e.error.text)) this.error.push(e.error.text);
          console.log(e);
        },
      });
  };

  private saveToken(token: string, expiresIn: string): void {
    localStorage.setItem('token', token);
    localStorage.setItem('expiresIn', expiresIn);
    this.token = token;
    this.expiresIn = expiresIn
  }

  ngOnInit() {
    let token = localStorage.getItem('token');
    if (token){
    return this.router.navigate(['profile']);
    }
    return;
  }
}
