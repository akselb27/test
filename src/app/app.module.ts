import { AppComponent } from './app.component';
import { SummaryPipe } from './summary.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'

import { FavouriteComponent } from './favourite/favourite.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './courses/course/course.component';
import { CoursesService } from './courses/courses.service';


@NgModule({
  declarations: [	
    AppComponent,
    CourseComponent,
    CoursesComponent,
    SummaryPipe,
    FavouriteComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
