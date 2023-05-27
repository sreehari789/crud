import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users:any[]=[]
  searchKey:string=''
  user:any={}

constructor(private api:ApiService, private router:Router){}

ngOnInit(): void {
 this.getAllUsers()
}

getAllUsers(){
  this.api.getUsers().subscribe((data:any)=>{
    console.log(data);
    this.users=data
   })}

// Search function
search(event:any){
  this.searchKey=event.target.value
}

// add new User
addUser(){
this.api.addUser(this.user)
.subscribe((data:any)=>{
  this.router.navigateByUrl('')
})
}


// delete a user
deleteUser(userid:any){
  this.api.deleteUser(userid)
  .subscribe((data:any)=>{
this.getAllUsers()
  },
  (error: any) => {
    console.log('Error deleting user', error);
  })}

  
}
