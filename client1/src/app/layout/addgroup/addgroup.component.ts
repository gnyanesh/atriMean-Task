import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AlertService, UserService } from '../../_services/index';
import { User,Group,Book } from '../../_models/index';


@Component({
  selector: 'app-addgroup',
  templateUrl: './addgroup.component.html',
  styleUrls: ['./addgroup.component.css']
})
export class AddgroupComponent  {

arrBirds: any [] = [
    { id:1, name: 'Loptop' },
    { id:2, name: 'KeyBoard'},
    { id:3, name: 'Mouse' },
    { id:4, name: 'PenDrive' },
  ];
    currentUser: User;
    users: User[] = [];
    groupp:Group[] = [];
    hardwares:Book[] = [];
    showHide = true;
  showHidee = false;
updatediv = false;
  changeShowStatus(){
    this.showHide = !this.showHide;
    this.showHidee = !this.showHidee;
    
  }

    ngOnInit() {
        

        
    }

    statusChange(id){
     
   alert(id);
  this.userService.statusUpdate(id).subscribe( res => { 
    console.log(res);
    this.router.navigate(['/dashboard']);
  
  });
    }

    deleteUser(_id: string) {
        this.userService.delete(_id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }

    private loadGroups(){
        this.userService.getAllgroups().subscribe(groupp =>  { this.groupp = groupp; });
    }

  model: any = {};
  loading = false;
 leastValue;
  leastValueName:any;
  least = 0;

  constructor(
      private router: Router,
      private userService: UserService,
      private alertService: AlertService) {
        this.userService.getAll().subscribe(users => { this.users = users; 

console.log(this.users);
        });
        this.userService.getAllTickets().subscribe(hardwares =>  { this.hardwares = hardwares; 

console.log(this.hardwares);

        });

this.userService.getAllgroups().subscribe(groupp =>  { this.groupp = groupp; 




    for (var i=0;i<groupp.length;i++)
    {

    console.log(groupp[i].charge);
        if(i == 0){
        this.leastValue = groupp[i].charge;
        this.leastValueName = groupp[i].empname;
        
        }
        else if((this.leastValue) > (groupp[i].charge)){
               this.leastValue = groupp[i].charge;
               this.leastValueName = groupp[i].empname;

        }else {
        this.leastValue = this.leastValue;
      this.leastValueName = groupp[i].empname;
        }
        
    }
  

});

       }

      group() {
     alert(this.model.hardwarename);
      alert(this.model.empname);
      this.loading = true;
      this.userService.addGroup(this.model)
          .subscribe(
              data => {
                  this.alertService.success('Group Created successfully', true);
                  this.router.navigate(['/dashboard']);
              },
             );
  }

}

