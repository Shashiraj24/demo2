import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TestService } from '../test.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  public test:any;

  constructor(private upd:TestService,private formbuilder:FormBuilder,private route:Router) { 
   this.upd.getMessage().subscribe((result:any)=>{
      console.log(result);
      console.log(result.id);
     this.test=result;
     console.log(this.test.branch);
   })

  }

  LoginForm1:any;

  ngOnInit(): void {
    this.LoginForm1 = this.formbuilder.group({
     
      name:[this.test.name],
      age:[this.test.age],
      empId:[this.test.empId],
      branch:[this.test.branch],
      role:[this.test.role]

    })
  }
  Login(){
    console.log(this.LoginForm1.value);
    this.upd.updateData(this.test.id,this.LoginForm1.value).subscribe((result:any)=>{
      console.log(result);
    })
    this.route.navigate(['crud']);
}


}
