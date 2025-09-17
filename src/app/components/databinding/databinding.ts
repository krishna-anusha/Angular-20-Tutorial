import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.html',
  styleUrl: './databinding.css'
})
export class Databinding {

  courseName:string="angular 20 tutorial";
  productPrice:number=12500;
  maxlength:number=5;
  minChar:number=3;
  inputType:string="radio";
  className:string="myColor"

  constructor(){
    
  }
  changeCourse(){
    this.courseName="react";
  }
  showWelcome(){
    alert("welcome to angular 20")
  }
  onCityChange(){
    alert("city changed")
  }
}
