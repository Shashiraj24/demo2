import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  public id:any= new  BehaviorSubject('');
  public data:any= new  BehaviorSubject('');
  public currentId= this.id.asObservable();
  public currentData= this.data.asObservable();

  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get('http://localhost:3000/api/getAllCourses');
  }

  updateData(id:any,data:any){
     return this.http.put('http://localhost:3000/api/updateCourses/'+id,data);
   }

   deleteData(id:any){
     return this.http.delete('http://localhost:3000/api/deleteCourses/'+id);
   }

   LoginData(data1:any){
    return this.http.post('http://localhost:3000/api/insertCourses',data1);
  }

   setMessage(id:any,data:any){
     this.id.next(id);
     this.data.next(data);
   }
   getMessage(){
    return this.currentId,this.currentData;
   }
}

