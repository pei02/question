import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { TestComponent } from './test/test.component';
import {TestTwoComponent} from './test-two/test-two.component';
import {QuestionDbTwoComponent} from './question-db-two/question-db-two.component';
import {TestTwoTfqComponent} from './test-two-tfq/test-two-tfq.component';
import {TestTwoMcqComponent} from './test-two-mcq/test-two-mcq.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: 'test_two',
    component: TestTwoComponent
  },
  {
    path: 'question_db_two',
    component: QuestionDbTwoComponent
  },
  {
    path: 'test_two_tfq',
    component: TestTwoTfqComponent
  },
  {
    path: 'test_two_mcq',
    component: TestTwoMcqComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true,
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }