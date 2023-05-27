import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl:string='http://localhost:3000/Users'
  constructor( private http:HttpClient) { }

  getUsers(){
    return this.http.get(this.baseurl)
  }

  // add new User
  addUser(userBody:any){
  return this.http.post(this.baseurl,userBody)
  }

  // to view user
  viewUser(userid:any){
    return this.http.get(`${this.baseurl}/${userid}`)
  }

  // to edit/update user
  updateUser(userid:any,user:any){
    return this.http.put(`${this.baseurl}/${userid}`,user)
  }

  // api call to delete user
  deleteUser(userid:any){
  return this.http.delete(`${this.baseurl}/${userid}`)
  }

}
