import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { TestService } from '../test.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor(private formbuilder : FormBuilder, private form:TestService,private route:Router) { }
  LoginForm:any;

  

  ngOnInit(): void {
    this.LoginForm = this.formbuilder.group({
     
      name:[''],
      age:[''],
      empId:[''],
      branch:[''],
      role:['']

    })
  }

  Login(){
    console.log(this.LoginForm);
  console.log(this.LoginForm.value);
   this.form.LoginData(this.LoginForm.value).subscribe((result)=>{
    console.log(result);
    
  });
  
  }

  
  onUpdate(id:any,data:any){
    this.form.setMessage(id,data);


  }
 
}
