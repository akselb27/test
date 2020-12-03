import { CoursesService } from './courses.service';
import {Component} from '@angular/core';
@Component({
    selector:'courses',
    template: `
    <input [(ngModel)]= "email" (keyup.enter)="OnKeyUp()"/>`


})
 export class CoursesComponent{
    
    email = "me@example.com";
    
OnKeyUp(){
    console.log(this.email)

}

    } 