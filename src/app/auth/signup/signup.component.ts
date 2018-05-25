import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as _moment from 'moment';
import * as _rollupMoment from 'moment';
import { AuthService } from '../auth.service';
const moment = _rollupMoment || _moment;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  maxDate;
  constructor (private authService: AuthService) { }

  ngOnInit() {
    this.maxDate = moment().subtract(18, 'years');
  }
  onSubmit(form: NgForm) {
    this.authService.registerUser({
      email: form.value.email,
      password: form.value.password
    });
  }
}
