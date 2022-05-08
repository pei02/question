import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { TestTwoComponent } from './test-two/test-two.component';
import { QuestionDbTwoComponent } from './question-db-two/question-db-two.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
    TestTwoComponent,
    QuestionDbTwoComponent
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
