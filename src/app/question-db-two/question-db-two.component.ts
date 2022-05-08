import { Component, OnInit } from '@angular/core';
import { MCQ } from '../test-two/mcq.const';
import { TFQ } from '../test-two/tfq.const';

@Component({
  selector: 'app-question-db-two',
  templateUrl: './question-db-two.component.html',
  styleUrls: ['./question-db-two.component.css']
})
export class QuestionDbTwoComponent implements OnInit {
  select:any;
  TFQ = TFQ;
  MCQ = MCQ;

  constructor() { }

  ngOnInit(): void {
    this.select="TF";
  }

  question_type(value:any){
    this.select=value;
  }

  scrollTotop(){
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  scrollTobottom(){
    window.scrollTo({
      top: 99999,
      behavior: "smooth"
    });
  }


}
