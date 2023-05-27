import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  userid:string=''
  user:any
  constructor(private activatedRoute:ActivatedRoute, private api:ApiService, private router:Router){}


   ngOnInit(): void {
   this.activatedRoute.params
   .subscribe((data:any)=>{
    this.userid=data.id
   })

// api call
  this.api.viewUser(this.userid).subscribe
  ((data:any)=>{
    this.user=data
    console.log(this.user);
  })
}

// update user
updateUser(){
  this.api.updateUser(this.userid,this.user).subscribe
  ((data:any)=>{
    console.log(data);
    this.router.navigateByUrl('')
  })
}



}
