import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(public formBuilder: FormBuilder, private http: HttpClient) { }
   
  readonly baseURI = 'http://localhost:8201/api';

  formModel = this.formBuilder.group({
    FirstName: ['', Validators.required],
    LastName: ['', Validators.required],
    Email: ['', Validators.required],
    Passwords: this.formBuilder.group({
      Password: ['', [Validators.required, Validators.minLength(5)]],
      ConfirmPassword: ['', Validators.required]
    }, { validator: this.comparePasswords }),
    Mobile: [''],
    StreetAddress: [''],
    Suburb: [''],
    City: [''],
    PostalCode: [''],
    Province: [''],
    IDNumber: ['']
  })
comparePasswords(grouper: FormGroup){
  let confirmPWControl = grouper.get('ConfirmPassword');

  if (confirmPWControl.errors == null || 'passwordMismatch' in confirmPWControl.errors) {
    if (grouper.get('Password').value != confirmPWControl.value)
    confirmPWControl.setErrors({ passwordMismatch: true });
    else
    confirmPWControl.setErrors(null);
  }
}
  signUp(){

    var body = {
      FirstName : this.formModel.value.FirstName,
      LastName : this.formModel.value.LastName,
      Email : this.formModel.value.Email,
      Password : this.formModel.value.Passwords.Password,
      Mobile : this.formModel.value.Mobile,
      StreetAddress : this.formModel.value.StreetAddress,
      Suburb : this.formModel.value.Suburb,
      City : this.formModel.value.City,
      PostalCode : this.formModel.value.PostalCode,
      Province : this.formModel.value.Province,
      IDNumber : this.formModel.value.IDNumber
    };
    return this.http.post(this.baseURI + '/ApplicationUser/Register', body);
  }
  signIn(formData){
    return this.http.post(this.baseURI + '/ApplicationUser/Login', formData);
  }
}
