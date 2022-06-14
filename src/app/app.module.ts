import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { TestTwoComponent } from './test-two/test-two.component';
import { QuestionDbTwoComponent } from './question-db-two/question-db-two.component';
import { TestTwoTfqComponent } from './test-two-tfq/test-two-tfq.component';
import { TestTwoMcqComponent } from './test-two-mcq/test-two-mcq.component';
import { QuestionDbOneComponent } from './question-db-one/question-db-one.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
    TestTwoComponent,
    QuestionDbTwoComponent,
    TestTwoTfqComponent,
    TestTwoMcqComponent,
    QuestionDbOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
