import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { TestComponent } from './test/test.component';
import {TestTwoComponent} from './test-two/test-two.component';
import {QuestionDbTwoComponent} from './question-db-two/question-db-two.component';
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