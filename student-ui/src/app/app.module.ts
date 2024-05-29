import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaveStudentComponent } from './component/save-student/save-student.component';
import { UpdateStudentComponent } from './component/update-student/update-student.component';
import { DeleteStudentComponent } from './component/delete-student/delete-student.component';
import { FindStudentComponent } from './component/find-student/find-student.component';
import { FindallStudentComponent } from './component/findall-student/findall-student.component';
import { ListStudentComponent } from './component/list-student/list-student.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from "@angular/material/paginator";

@NgModule({
  declarations: [
    AppComponent,
    SaveStudentComponent,
    UpdateStudentComponent,
    DeleteStudentComponent,
    FindStudentComponent,
    FindallStudentComponent,
    ListStudentComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatPaginatorModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
