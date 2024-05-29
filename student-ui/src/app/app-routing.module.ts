import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SaveStudentComponent} from "./component/save-student/save-student.component";
import {UpdateStudentComponent} from "./component/update-student/update-student.component";
import {DeleteStudentComponent} from "./component/delete-student/delete-student.component";
import {FindStudentComponent} from "./component/find-student/find-student.component";
import {FindallStudentComponent} from "./component/findall-student/findall-student.component";
import {ListStudentComponent} from "./component/list-student/list-student.component";

const routes: Routes = [
  {path:'',redirectTo:'save',pathMatch:'full'},
  {path:'save',component:SaveStudentComponent},
  {path:'update',component:UpdateStudentComponent},
  {path:'delete',component:DeleteStudentComponent},
  {path:'find',component:FindStudentComponent},
  {path:'findall',component:FindallStudentComponent},
  {path:'all',component:ListStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
