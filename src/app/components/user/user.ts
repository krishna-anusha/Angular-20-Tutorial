import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User implements OnInit {

  UserList:any[]=[];
  http = inject(HttpClient);
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
    this.http.post("https://api.freeprojectapi.com/api/GoalTracker/register",this.userObj).subscribe({
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
  onReset(){
    this.userObj={
  "userId": 0,
  "emailId": "",
  "password": "",
  "fullName": "",
  "mobileNo": ""
}
  }
  onEdit(item:any){
    this.userObj={...item};
    
  }
  onUpdate(){
    this.userObj.createdDate=new Date();
    this.http.put("https://api.freeprojectapi.com/api/GoalTracker/updateUser?id="+this.userObj.userId,this.userObj).subscribe({
      next:()=>{
        alert("User updated Success ✅");
        this.getusers(); // refresh user list
      },
      error:(err:any)=>{
        alert("Error ❌ - " + (err.error || "Something went wrong"));
      }
    })
  }
  onDelete(item:any){
    this.http.delete("https://api.freeprojectapi.com/api/GoalTracker/deleteUserById?id="+item.userId).subscribe(
      {
      next:()=>{
        alert("User deleted Success ✅");
        this.getusers(); // refresh user list
      },
      error:(err:any)=>{
        alert("Error ❌ - " + (err.error || "Something went wrong"));
      }}
    )
  }
}
