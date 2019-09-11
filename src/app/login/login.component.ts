import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { RegisterService } from '../shared/register.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
formModel = {
  UserName: '',
  Password: ''
}
  constructor(private service: RegisterService, private router: Router, public Toastr: ToastrService) { }

  ngOnInit() {
  }
onSubmit(form: NgForm){
 this.service.signIn(form.value).subscribe(
   (response: any)=>{
     localStorage.setItem('token', response.token);
     this.router.navigateByUrl('/dashboard');
   },
   err => {
    if (err.status == 400)
    this.Toastr.error('Incorrect username or password.', 'Authentication failed.');
  else
    console.log(err);
   }
 );
}
}
