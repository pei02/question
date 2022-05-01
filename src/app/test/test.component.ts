import { Component, OnInit } from '@angular/core';
import { TFQ } from './tfq.const'
import { MCQ } from './mcq.const'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  TFQ = TFQ.sort(() => Math.random() - 0.5).slice(0,10);
  MCQ = MCQ.sort(() => Math.random() - 0.5).slice(0,15);
  TFQ_U: any = new Array(10).fill('');
  TFQ_S: any = [];
  MCANS_U: any = new Array(15).fill('');
  MCANS_S: any = [];
  MC_Mistake: any = [];
  TF_Mistake: any = [];
  scores: number = 0;
  send:boolean=false;

  constructor() { }

  ngOnInit(): void {
    this.MCQ.forEach(x => {
      this.MCANS_S.push(x.ans)
    })
    this.TFQ.forEach(y=>{
      this.TFQ_S.push(y.ans)
    })
  }

  submit_ans() {

    for (let ans = 0; ans < this.MCANS_S.length; ans++) {
      this.MC_Mistake[ans] = this.MCANS_S[ans] == this.MCANS_U[ans] ? true : false;
      if(this.MC_Mistake[ans]==true){
        this.scores+=4;
      }
    }

    for (let ans = 0; ans < this.TFQ_S.length; ans++) {
      this.TF_Mistake[ans] = this.TFQ_S[ans] == this.TFQ_U[ans] ? true : false;
      if(this.TF_Mistake[ans]==true){
        this.scores+=4;
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
