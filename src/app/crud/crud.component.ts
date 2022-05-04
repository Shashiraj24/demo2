import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from '../test.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  public test:any;
 

  constructor(private testShare:TestService,private route:Router) { }

  ngOnInit(): void {
   
    this.testShare.getData().subscribe((res:any)=>{
      console.log(res);
      this.test=res;
    });
    
  }
   onUpdate(id:any,data:any){
     console.log(data);
     this.testShare.setMessage(id,data)
     this.route.navigate(['update']);
    

   }

  //  for Delete property...
   onDelete(Id:any){
    this.testShare.deleteData(Id).subscribe((result:any)=>{
      console.log(result);
    })
   }

  // onDelete(dt:any){
  //   this.testShare.deleteData(dt.id).subscribe((result:any)=>{
  //     console.log(result);
  //   })
  //   this.testShare.getData().subscribe((result:any)=>{
  //     console.log(result);
  //     this.test=result;
  //   })
  //   if(this.test.length>0){
  //     this.getDataFrombackend()
  //   }
  //}

// for insert property...
   addData(){
     this.route.navigate(['reactive']);

   }
  }
