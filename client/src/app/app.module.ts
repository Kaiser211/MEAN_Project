import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FrameComponent } from './frame/frame.component';
import { LoginRegistrationComponent } from './login-registration/login-registration.component';
import { SearchPipe } from './pipe/search.pipe';
import { NewAnswerComponent } from './frame/new-answer/new-answer.component';
import { NewQuestionComponent } from './frame/new-question/new-question.component';
import { DashboardComponent } from './frame/dashboard/dashboard.component';
import { ShowQuestionComponent } from './frame/show-question/show-question.component';
import { LoginComponent } from './login-registration/login/login.component';
import { RegistrationComponent } from './login-registration/registration/registration.component';
import { UserService } from './services/user.service';
import { QuestionService } from './services/question.service';
import { AnswerService } from './services/answer.service';

@NgModule({
  declarations: [
    AppComponent,
    FrameComponent,
    LoginRegistrationComponent,
    SearchPipe,
    NewAnswerComponent,
    NewQuestionComponent,
    DashboardComponent,
    ShowQuestionComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    UserService,
    QuestionService,
    AnswerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
