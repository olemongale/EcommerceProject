import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder } from '@angular/forms';
import { RegisterService } from '../shared/register.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public service: RegisterService, public fb: FormBuilder, public Toastr: ToastrService) { 
   
  }
  
  ngOnInit() {
    this.service.formModel.reset();
  }
onSubmit(){
  this.service.signUp().subscribe(
    (response:any) => {
      if(response.succeeded){
        this.service.formModel.reset();
          this.Toastr.success('New User Successfully Added.', 'Success!.');
      } else{
         response.errors.forEach(element => {
           switch (element.code) {
             case 'DuplicateUserName':
              this.Toastr.error('Username already in the System','Registration failed.');
               break;
             default:
                this.Toastr.error(element.description,'Registration failed.');
               break;
           }
         });
      }
    },
    err => {
      console.log(err);
    }
  );

}
}
