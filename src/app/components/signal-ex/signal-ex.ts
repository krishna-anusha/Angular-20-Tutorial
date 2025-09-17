import { Component,signal,computed } from '@angular/core';

@Component({
  selector: 'app-signal-ex',
  imports: [],
  templateUrl: './signal-ex.html',
  styleUrl: './signal-ex.css'
})
export class SignalEx {

  courseName=signal<string>("Angular");
  courseDuration=signal("15 videos");
  courseDetails=computed(()=>this.courseName()+" "+this.courseDuration());
  constructor(){
    
    setTimeout(()=>{
      this.courseName.set("reacts");
    },5000)
  }
}
