import { Component, OnInit } from '@angular/core';
import { MCQ } from '../test-two/mcq.const';

@Component({
  selector: 'app-test-two-mcq',
  templateUrl: './test-two-mcq.component.html',
  styleUrls: ['./test-two-mcq.component.css']
})
export class TestTwoMcqComponent implements OnInit {

  MCQ = MCQ.sort(() => Math.random() - 0.5).slice(0,50);
  MCANS_U: any = new Array(50).fill('');
  MCANS_S: any = [];
  MC_Mistake: any = [];
  scores: number = 0;
  send:boolean=false;
  link:any;
  constructor() { }

  ngOnInit(): void {
    this.MCQ.forEach(x => {
      this.MCANS_S.push(x.ans)
    })
  }
  submit_ans() {

    for (let ans = 0; ans < this.MCANS_S.length; ans++) {
      this.MC_Mistake[ans] = this.MCANS_S[ans] == this.MCANS_U[ans] ? true : false;
      if(this.MC_Mistake[ans]==true){
        this.scores+=2;
      }
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    this.send=true;
    alert("您獲得："+this.scores+"分");

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
