import { Component, OnInit } from '@angular/core';
import { Question } from '../../models/question';
import { QuestionService } from '../../services/question.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {

  newQuestion: Question = new Question;

  constructor(
    private _router: Router,
    private _quetionService: QuestionService
  ) { }

  ngOnInit() {
  }

  createQuestion(){
    this._quetionService.createQuestion(this.newQuestion).subscribe(
      (res) => {
        console.log(res.json())
        this._router.navigateByUrl('/dashboard')
      }
    )
  }
}
