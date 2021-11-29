import { Component, OnInit } from '@angular/core';
import {User} from 'src/Class/User'
import {  ActivatedRoute,Router } from '@angular/router';
import { PolicyService } from 'src/service/policy.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
})
export class ReportsPage implements OnInit {
  public reports:string;
  UserList:any[]=[];
  user=new User();
  constructor(private activatedRoute: ActivatedRoute,private router:Router,private policyService:PolicyService ) { }

  ngOnInit() {
    this.reports = this.activatedRoute.snapshot.paramMap.get('id');
  }
  
  ionViewWillEnter(){

    let returndata = this.policyService.getBookingList();
    returndata.snapshotChanges().subscribe((data) => {
      this.UserList=[]
      data.forEach(d => {
        let a = d.payload.toJSON();
        console.log(a);
        a['$key'] = d.key;
        this.UserList.push(a);


      })
    


    })

  }
  LogOut(){
    // localStorage.clear();
    this.router.navigate(['home']);
  }

}