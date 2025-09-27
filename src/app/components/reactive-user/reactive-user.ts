import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-user',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-user.html',
  styleUrl: './reactive-user.css'
})
export class ReactiveUser implements OnInit {

  UserList:any[]=[];
  http = inject(HttpClient);
  userForm:FormGroup=new FormGroup({
     userId: new FormControl(0),
  emailId: new FormControl("",[Validators.required,Validators.email]),
  password: new FormControl("",[Validators.required,Validators.minLength(4)]),
  fullName: new FormControl(""),
  mobileNo: new FormControl("")

  })
  userObj:any={
  "userId": 0,
  "emailId": "",
  "password": "",
  "fullName": "",
  "mobileNo": ""
}

  ngOnInit(): void {
    this.getusers();
  }
  getusers(){
    this.http.get("https://api.freeprojectapi.com/api/GoalTracker/getAllUsers").subscribe((res:any)=>{
      this.UserList=res;
    })
  } 
    onSaveUser(){
    debugger;
    const formValue=this.userForm.value;
    this.http.post("https://api.freeprojectapi.com/api/GoalTracker/register",formValue).subscribe({
     next: (result: any) => {
        debugger;
        alert("User Created Success ✅");
        this.getusers(); // refresh user list
      },
      error: (err: any) => {
        debugger;
        alert("Error ❌ - " + (err.error || "Something went wrong"));
      }
    })
  }

}
