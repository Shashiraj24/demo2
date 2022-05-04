import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './crud/crud.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [
  {path:'crud',component:CrudComponent},
  {path:'reactive',component:ReactiveFormComponent},
  {path:'update',component:UpdateComponent}
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
