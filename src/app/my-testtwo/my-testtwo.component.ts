import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-my-testtwo',
  templateUrl: './my-testtwo.component.html',
  styleUrls: ['./my-testtwo.component.css']
})
export class MyTesttwoComponent implements OnInit {
  count = 0;
  users: any = [];
  constructor(private userService: UsersService) {}

  ngOnInit(): void {
   this.getUsersList();
  }

  getUsersList(){
    this.userService.getUsers().subscribe(data => {
      console.log('myressss : ', data);
      this.users = data;
    });
  }

}
