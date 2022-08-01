import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isSubmitted: boolean = false;
  public myForm: any;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      username: ['', [Validators.required,Validators.minLength(6),Validators.maxLength(20)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]]
    })
  }

  get f() {
    return this.myForm.controls;
  }

  onSubmitForm() {
    this.isSubmitted = true;
    if (!this.myForm.valid) {
      console.log(this.myForm);
      console.log(this.myForm.value);
    
    } else {
      this.router.navigate(['empfeedback'])
  
    }

  }
}