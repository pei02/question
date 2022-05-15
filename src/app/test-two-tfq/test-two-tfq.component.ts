import { Component, OnInit } from '@angular/core';
import { TFQ } from '../test-two/tfq.const';

@Component({
  selector: 'app-test-two-tfq',
  templateUrl: './test-two-tfq.component.html',
  styleUrls: ['./test-two-tfq.component.css']
})
export class TestTwoTfqComponent implements OnInit {

  TFQ = TFQ.sort(() => Math.random() - 0.5).slice(0,50);
  TFQ_U: any = new Array(50).fill('');
  TFQ_S: any = [];
  TF_Mistake: any = [];
  scores: number = 0;
  send:boolean=false;
  link:any;
  constructor() { }

  ngOnInit(): void {
    this.TFQ.forEach(y=>{
      this.TFQ_S.push(y.ans)
    })
    console.log(this.TFQ_U)
  }

  submit_ans() {

    for (let ans = 0; ans < this.TFQ_S.length; ans++) {
      this.TF_Mistake[ans] = this.TFQ_S[ans] == this.TFQ_U[ans] ? true : false;
      if(this.TF_Mistake[ans]==true){
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
