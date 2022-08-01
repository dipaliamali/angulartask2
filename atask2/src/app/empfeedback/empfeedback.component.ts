import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: ' app-empfeedback',
  templateUrl: './empfeedback.component.html',
  styleUrls: ['./empfeedback.component.css']
})
export class EmpfeedbackComponent implements OnInit {

  public starRating:any;
  isSubmitted: boolean = false;
  public empForm: any;
  
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.starRating = 0;  
    this.empForm = this.fb.group({
      username: ['', [Validators.required,Validators.minLength(6),Validators.maxLength(20)]],
      // password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]],
       // rating: ['', Validators.required],
       
    })

  }

  get f() {
    return this.empForm.controls;
  }

  onSubmitForm() {
    this.starRating=0;
    this.isSubmitted = true;
    if (!this.empForm.valid) {
      console.log(this.empForm);
      console.log(this.empForm.value);
    
    } else {
      this.router.navigate(['empdata'])
  
    }

  }
}