import { Component, OnInit } from '@angular/core';
import { MyCardService } from '../mycard.service';

@Component({
  selector: 'app-my-test',
  templateUrl: './my-test.component.html',
  styleUrls: ['./my-test.component.css']
})
export class MyTestComponent implements OnInit {
  mycards: any = [];
  constructor(private cardService: MyCardService) {}

  ngOnInit(): void {
    this.getCardList();
  }


  getCardList() {
    this.cardService.getCourses().subscribe(res => {
      console.log('res', res);
      this.mycards = res;
    })
  }



  //  BASIC STEP-2 
  // cards = [
  //   { title: 'Card 1', text: 'Content for card 1' },
  //   { title: 'Card 2', text: 'Content for card 2' },
  //   { title: 'Card 3', text: 'Content for card 3' },
  //   { title: 'Card 4', text: 'Content for card 5' },
    
  // ];


}
