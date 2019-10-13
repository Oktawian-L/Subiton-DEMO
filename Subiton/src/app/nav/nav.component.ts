import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../_services/authorization.service';
import { error } from 'util';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  // declaring empty model
  model: any = {};
  constructor(private authService: AuthorizationService) { }

  ngOnInit() {
  }

  /// Method check ifuser is logged in
  login() {
    console.log('button');
    this.authService.login(this.model).subscribe(next => {
      console.log('logged2');
    }, errore => {
        console.log('error' + errore);
    });
  }

  /// Method check ifuser is logged in
  logout() {
    localStorage.removeItem('token');
    console.log('loggedout');
  }

  /// Method check ifuser is logged in
  isLoggedIn() {
    // get item for local objects storage
    const token = localStorage.getItem('token');
    return  !!token;
  }
}
