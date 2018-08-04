import { Component, OnInit } from '@angular/core';
import { AlertService, UserService,AuthenticationService } from '../../_services/index';
import { Group } from '../../_models/index';
import { Book } from '../../_models/index';

import { BrowserModule } from '@angular/platform-browser';

import { JsonpModule } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activeticket',
  templateUrl: './activeticket.component.html',
  styleUrls: ['./activeticket.component.css'],
 
 
})
export class ActiveticketComponent implements OnInit {
  arrBirds: any [] = [
    { id:1, name: 'Loptop' },
    { id:2, name: 'KeyBoard'},
    { id:3, name: 'Mouse' },
    { id:4, name: 'PenDrive' },
  ];

  arrPrio: any [] = [
    { id:1, name: 'Acer' },
    { id:2, name: 'Dell'},
    { id:3, name: 'HP' },
    
  ];
  name:string;
  model: any = {};
  showHide = false;
  showHidee = true;
  showHideee = false;
  
  changeShowStatus(){
    this.showHide = !this.showHide;
    this.showHidee = !this.showHidee;
    this.showHideee = !this.showHideee;
  }
  
  constructor(
    private router: Router,
    private userService: UserService,
    private alertService: AlertService,
  private auservice: AuthenticationService) {
      
     }
book: Book[] = [];
tickett:any;
tic:any;

_id;
id;
idd;

  //users: User[] = [];
  

  ngOnInit() {
      this.userService.getAllTickets().subscribe(book =>  { this.book = book; 

console.log(this.book);
      });

}
ticketinfo(_id){
  //alert(_id);
  this.showHide = !this.showHide;
  this.showHidee = !this.showHidee;
 
this._id = _id;
 
  this.auservice.ticinfo(this._id).subscribe(
    tickett => {
         
          console.log(tickett); 
           this.tickett = tickett; 
console.log("particular....");
     console.log(this.tickett);
           }
      );
      

}
ticketdelete(_id){
  //alert(_id);
  this.userService.delete(_id).subscribe( res => { 
    console.log(res);
    this.router.navigate(['/addaccount']);
  
  });
}

ticketupdate(_id){
  
  this.idd = _id;
 let ticket={
   status:this.model.status,
   
 }

 let st = this.model.status;
 let pr = this.model.priority;
        alert(this.idd);
  this.auservice.update(this.idd,st,pr).subscribe( res => { 
    console.log(res);
    this.router.navigate(['/addaccount']);
  
  });
}


ticketopen(){
 this.router.navigate(['/ticketinfo']);
  }
  ticketpending(){
    this.router.navigate(['/ticketpending']);
     }
     ticketclose(){
      this.router.navigate(['/ticketclose']);
     }

}
