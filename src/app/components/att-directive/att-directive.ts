import { DatePipe, JsonPipe, LowerCasePipe, NgClass, NgStyle, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit, signal } from '@angular/core';


@Component({
  selector: 'app-att-directive',
  imports: [NgClass,NgStyle,UpperCasePipe,LowerCasePipe,TitleCasePipe,DatePipe,SlicePipe,JsonPipe],
  templateUrl: './att-directive.html',
  styleUrl: './att-directive.css'
})
export class AttDirective implements OnInit,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked,OnDestroy {
  firstName:string="Anusha";
  courseName:string="Angular20";
  rollNumberList = [11, 12, 13, 14, 15, 16, 17];
  studentObj:any = { name: "Jet", city: "Pune", state: "MH" };
  currentDate: Date = new Date();
  


  constructor(){
console.log("CONSTRUCTOR")
  }
  ngOnInit(): void {
    console.log("NGONINIT")
    //trigger api call
    //subscrie
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecke")
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
    //to deal with viewchild
    //sometimes subscribe
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy");
    //restrict user from navigation
    //unubscribe
  }
 divClass=signal<string>("");
 divColor:boolean=true;
 setClassName(className:string)
 {
  this.divClass.set(className);
 }
}
