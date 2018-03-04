import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrameComponent } from './frame/frame.component';
import { DashboardComponent } from './frame/dashboard/dashboard.component';
import { LoginRegistrationComponent } from './login-registration/login-registration.component';
import { LoginComponent } from './login-registration/login/login.component';
import { RegistrationComponent } from './login-registration/registration/registration.component';
import { NewQuestionComponent } from './frame/new-question/new-question.component';
import { ShowQuestionComponent } from './frame/show-question/show-question.component';
import { NewAnswerComponent } from './frame/new-answer/new-answer.component';

const routes: Routes = [
  {
    // localhost:8000/dashboard/
    path:'dashboard', component: FrameComponent, children: [
      { path:'', component: DashboardComponent },
      { path: 'new/Question', component: NewQuestionComponent },
      { path: 'question/:id', component: ShowQuestionComponent },
      { path: 'new/Answer/:id', component: NewAnswerComponent },
    ]
  },
  {
    // localhost:8000/
    path:'', component: LoginRegistrationComponent, children: [
      { path:'', component: RegistrationComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
