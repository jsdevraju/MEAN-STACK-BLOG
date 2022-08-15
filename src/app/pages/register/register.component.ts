import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {

  public loading:boolean = false

  constructor(
    private toastr: ToastrService,
    private fb: FormBuilder,
    private api: ApiService,
    private router: Router
    
  ) {}

  loginForm = this.fb.group({
    fullname: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(20)],
    ],
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
        ),
      ],
    ],
  });

  ngOnInit(): void {}

  get name() {
    return this.loginForm.get('name');
  }
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  register() {
    this.loading = true;
    this.api.registerUser(this.loginForm.value).subscribe(
      (res: any) => {
        this.loading = false;
        localStorage.setItem('user', JSON.stringify(res));
        this.api.userState = res;
        this.toastr.success('You are registered successfully');
        this.router.navigate(['/']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
