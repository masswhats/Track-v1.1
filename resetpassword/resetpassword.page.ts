import { Component, OnInit } from '@angular/core';
import { PolicyService } from 'src/service/policy.service';
import { User } from 'src/Class/User';
import { AlertService } from '../alert-info/alert-service.service';
import { ValidationService } from 'src/service/validation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.page.html',
  styleUrls: ['./resetpassword.page.scss'],
})
export class ResetpasswordPage implements OnInit {
  UserList: any[] = [];
  user = new User();
  a: any;
  b: any;
  c: string;
  constructor(private policyService: PolicyService, private alertservice: AlertService,
    private validation: ValidationService, private router: Router) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    
    this.user= JSON.parse(localStorage.getItem('user'));
    
}
WINDOW()
  {      
    
          
        
          var id=JSON.parse(localStorage.getItem('user')).$key;
          let temp=this.c;
          
          if (temp===this.user.Password)
         { 
          if (!((this.a.length > 0 && this.b.length > 0 ) && (this.a=== this.b))) {
            this.alertservice.Alert("Please enter valid password", 2, function () { }, function () { });
         }
          // const users: any[]=Array.of(JSON.parse(localStorage.getItem('user')));
          // const usersJson: any[] = Array.of(res.json());
    else{
      // var id = JSON.parse(localStorage.getItem('user')).$key;
      // console.log(this.Pass);
         temp=this.a;
         
         this.policyService.resetpassword(id,temp);
     
    this.alertservice.Alert(" Password changed",4,function(){},function(){})
    // this.toastr.error("success",'passregister')
    this.a='';
    this.b='';
    this.c='';
    // localStorage.clear();
    // this.router.navigate(['login']);
          }
        }
      else{
        this.alertservice.Alert("Old password is wrong", 2, function () { }, function () { });
      }
    
  }
 
  LogOut(){
    localStorage.clear();
    this.router.navigate(['login']);
  }
}