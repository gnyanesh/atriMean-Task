import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Group } from '../../_models/index';
import { Tag, Tickettype,Book } from '../../_models/index';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AlertService, UserService } from '../../_services/index';

@Component({
  selector: 'app-addHardware',
  templateUrl: './addHardware.component.html',
  styleUrls: ['./addHardware.component.css']
})
export class addHardwareComponent {


    model: any = {};
    loading = false;
   
    
    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { 

           

        }

    hardwareType() {
       
        this.loading = true;
        this.userService.addBook(this.model)
       
            .subscribe(
                data => {
                    this.alertService.success('Hardware Created successfully', true);
                    this.router.navigate(['/dashboard']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

    
    book;

    ngOnInit() {
        
        
    }

}
