import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Http } from '@angular/http';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnInit {
  currentUser: User = null;
  
  constructor(
    private _http: Http,
    private _router: Router,
    private _userService: UserService
  ) { }

  ngOnInit() {
    this.getUserSession()
  }
  getUserSession() {
    this._userService.getCurrentUser().subscribe(
      res =>{
        this.currentUser = res.json();
        if(this.currentUser == null){
          this._router.navigateByUrl('/');
        }
      }
    )
  }
  logout() {
    this._userService.logout().subscribe(
      res =>{
        this.currentUser = null
      }
    )
  }

}
