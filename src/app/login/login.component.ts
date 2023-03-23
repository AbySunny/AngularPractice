import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{

  data="Your Perfect Banking Partner"
  inputplacsholder="Account Number"
  acno=''
  psw=''

  

  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {
    
  }

  login(){
    var acnum=this.acno
    var psw=this.psw
    var userDetails1=this.ds.userDetails
    if(acnum in userDetails1){
      if(psw==userDetails1[acnum]["password"]){
        alert("login success")
        this.router.navigateByUrl("dashboard")
      }
      else{
        alert("incorrect password")
      }
    }
    else{
      alert('acno incorrect or not registered yet')
    }
  }


  
}
