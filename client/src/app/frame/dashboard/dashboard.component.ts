import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Http } from '@angular/http';
import { User } from '../../models/user';
import { Question } from '../../models/question';
import { QuestionService } from '../../services/question.service';
import { AnswerService } from '../../services/answer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  questions: Question[];
 
  constructor(
    private _http: Http,
    private _router: Router,
    private _userService: UserService,
    private _questionService:QuestionService,
    private _answerService: AnswerService

  ) {
  }
  
  ngOnInit() {

    this.allQuestions()
  }

  allQuestions() {
    console.log(this._userService);
    this._questionService.getQuestions().subscribe(
      res => {
        this.questions = res.json()
      }
    )
  }
  
 
 
 

}
