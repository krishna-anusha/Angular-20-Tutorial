import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css'
})
export class ControlFlow {

  isParaVisible:boolean=false;
  citList:string[]=["Pune","Mumbai","Panji","Nagpur"];
   students:any[] = [
    { name: 'Anusha', city: 'Hyderabad', isActive: true },
    { name: 'Krishna', city: 'Bangalore', isActive: false },
    { name: 'Ravi', city: 'Chennai', isActive: true },
    { name: 'Meena', city: 'Delhi', isActive: false },
  ];
  month:string="jan";
  changeValue(){
    this.isParaVisible=!this.isParaVisible;
  }

}
