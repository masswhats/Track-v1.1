import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppConfig } from 'src/Class/AppConfig';
import { User } from 'src/Class/User';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  appconfig = new AppConfig();
  user = new User()
  public userPages = [
    { title: 'Home', url: 'user-home', icon: 'home' },
    { title: 'Reset Password', url: 'resetpassword', icon: 'lock-closed' },
    { title: 'History', url: 'history', icon: 'book' },
    { title: 'My Account', url: 'myaccount', icon: 'person-circle' },
     { title: 'verute', url: 'verute', icon: 'person-circle' },
   ];
   public appPages = [
     { title: 'Home', url: 'home', icon: 'home' },
     { title: 'Search', url: 'search', icon: 'search' },
     { title: 'Pass Requested', url: 'user-list', icon: 'people-circle' },
     { title: 'Reports', url: 'reports', icon: 'paper-plane' },
    ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(private router: Router) {


  }

  ionViewWillEnter() {

  }

  CheckType() {
    if (localStorage.getItem('user')) {
      let usertype = JSON.parse(localStorage.getItem('user')).UserType
      return usertype;

    }
  }

  open(url) {
    
    if (url == '') {
      this.logOut
    } else {
      this.router.navigate([url]);
    }

  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

}
