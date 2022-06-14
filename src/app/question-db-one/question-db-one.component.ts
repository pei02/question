import { Component, OnInit } from '@angular/core';
import { MCQ } from '../test/mcq.const';
import { TFQ } from '../test/tfq.const';

@Component({
  selector: 'app-question-db-one',
  templateUrl: './question-db-one.component.html',
  styleUrls: ['./question-db-one.component.css']
})
export class QuestionDbOneComponent implements OnInit {

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
