import { NgClass, NgStyle } from '@angular/common';
import { Component, signal } from '@angular/core';


@Component({
  selector: 'app-att-directive',
  imports: [NgClass,NgStyle],
  templateUrl: './att-directive.html',
  styleUrl: './att-directive.css'
})
export class AttDirective {
 divClass=signal<string>("");
 divColor:boolean=true;
 setClassName(className:string)
 {
  this.divClass.set(className);
 }
}
