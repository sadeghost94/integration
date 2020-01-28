import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';

import {AlertService, AuthenticationService, UserService} from '../../_services';
import {RegistrationClientDTO} from "../../dto";
import {ErrorStateMatcher} from '@angular/material/core';
import {MatDatepickerInputEvent} from "@angular/material";
import {AccountDto} from "../../dto/AccountDto";
import {EmailDto} from "../../dto/EmailDto";
import {InstitutionDto} from "../../dto/InstitutionDto";
import {Profile} from "../../dto/Profile";
import {AddressDto} from "../../dto/AddressDto";
import {promise} from "selenium-webdriver";

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({templateUrl: 'register.component.html',styleUrls: ['./register.component.css']})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  birthday: string;
  profilelist : any;




  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private alertService: AlertService,

  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);


    }

    this.profilelist = [
      new Profile( "ADMINISTRATOR", "ADMIN",  true),
      new Profile( "PROFESSIONAL", "EXPERT",  true),
      new Profile( "SEARCHER", "SEARCHER",  true)

    ];

  }

  ngOnInit() {

       console.log(this.profilelist);

  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }
  getBirthday(event: MatDatepickerInputEvent<Date>) {
    const d = new Date(event.value);

    const date = d.getDate();
    const month = d.getMonth() + 1; // Be careful! January is 0 not 1
    const year = d.getFullYear();

    this.birthday = year + '-' + month + '-' + date;
    console.log(this.birthday)
  }

  register(username: string, password: string,emailDto: string,firstName: string, lastname: string,middlename: string,  institutionCode: string, institutionName : string, profile: string, city: string, postalCode: string, province: string, street: string, streetNumber: string) {
    this.submitted = true;

   console.log(profile);


    let data = new RegistrationClientDTO(new AccountDto(username, password) ,this.birthday, new EmailDto(emailDto), firstName, middlename, lastname, new InstitutionDto(institutionCode, institutionName), profile, new AddressDto(city, postalCode, province, street, Number(streetNumber)))

    this.loading = true;
    this.userService.register(JSON.stringify(data))
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          console.log(data);
          if (data["emailExist"]==true){
            console.log("error");
            //this.router.navigate(['/login']);
          }else if(data["usernameExist"]==true){
            this.alertService.success(data["usernameExist"])
            //this.router.navigate(['/login']);
          }else if(data["profileIsSet"]==false){
            this.alertService.success(data["profileIsSet"])
            //this.router.navigate(['/login']);
          }else{
            this.router.navigate(['/login']);
          }
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }

}
