import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PolicyService } from 'src/service/policy.service';
import {User} from 'src/Class/User';
import { ɵangular_packages_platform_browser_dynamic_platform_browser_dynamic_a } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit {

  UserList:any[]=[];
  b: any[];
  // user=new User;
  constructor(private policyService: PolicyService,private router:Router) { }

  ngOnInit() {

  }

  ionViewWillEnter(){

    let returndata = this.policyService.getBookingList1();
    returndata.snapshotChanges().subscribe((data) => {
      this.UserList=[]
      data.forEach(d => {
        console.log(d.payload.toJSON());
        let a=d.payload.toJSON();
        if(a['status']===1)
        {
          this.UserList.push(a);

        }
        // let a = d.payload.toJSON();
        // console.log(a);
        // a['$key'] = d;
        // console.log(d);
        // this.b=[];
        //  b=this.policyService.getBooking(d.key);
        // console.log(b);
        // this.UserList.push(a);
        // if(this.UserList.Status
        // console.log(a);
        // data.forEach(q=>{
        //   if(this.UserList['$key'].User.Status=2)
        //   console.log(a);

        // })
        

      })
   


    })

  }

  LogOut(){
    localStorage.clear();
    this.router.navigate(['login']);
  }
  statusupdate(id)
  {

   console.log(id);
   this.policyService.verifyUser(id);

  }
  statusupdate1(id)
  {

   console.log(id);
   this.policyService.verifyUser1(id);

  }
}