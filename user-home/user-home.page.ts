import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PolicyService } from 'src/service/policy.service';
import { AlertService } from '../alert-info/alert-service.service';

import { Camera,CameraOptions} from '@ionic-native/Camera/ngx';
import { User } from 'src/Class/User';
import { pass } from 'src/Class/pass';

import { Geolocation } from '@ionic-native/geolocation/ngx';




@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.page.html',
  styleUrls: ['./user-home.page.scss'],
})
export class UserHomePage implements OnInit {
  clickedImage: string;
  user=new User();
  UserList:any[]=[];

  options: CameraOptions = {
    quality: 30,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  
  // ,private camera: Camera

  constructor(private router:Router,private policyService: PolicyService,private alertservice: AlertService,private camera: Camera,private geolocation: Geolocation) { }

  ngOnInit() {
    
  }
  ionViewWillEnter(){

    let temp=JSON.parse(localStorage.getItem('user')).VehicleNumber;
     
    let returndata = this.policyService.getBookingList1();
    returndata.snapshotChanges().subscribe((data) => {
      this.UserList=[]
      data.forEach(d => {
        let a = d.payload.toJSON();
        //  this.policyService.verifyUser2(temp);
        if((a['vehiclenum2']===temp)&&(a['status']==='2'))
        { 
          console.log(a);
          this.UserList.push(a);
        
        }
        
        
      })
   


    })
  }
  // captureImage() {
  //   this.camera.getPicture(this.options).then((imageData) => {
  //     // imageData is either a base64 encoded string or a file URI
  //     // If it's base64 (DATA_URL):
  //     let base64Image = 'data:image/jpeg;base64,' + imageData;
  //     this.clickedImage = base64Image;
  //   }, (err) => {
  //     console.log(err);
  //     // Handle error
  //   });
  // }
  Fine()
  {
    this.router.navigate(['fineleft']);
  }

  LogOut(){
    localStorage.clear();
    this.router.navigate(['login']);
  }
  pass(){
    this.router.navigate(['passgeneration']);
  }


  start()
  {
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      console.log(imageData)
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.user.userimage = base64Image;
      this.clickedImage=base64Image;
      console.log(base64Image);
    }, (err) => {
      console.log(err);
      // Handle error
      this.geolocation.getCurrentPosition().then((resp) => {
        let a=resp.coords.latitude
         let b=resp.coords.longitude
         console.log(a);
         console.log(b);
       }).catch((error) => {
         console.log('Error getting location', error);
       });
       
       let watch = this.geolocation.watchPosition();
       watch.subscribe((data) => {
        // data can be a set of coordinates, or an error (if an error occurred).
        // data.coords.latitude
        // data.coords.longitude
       });
    })
    // this.camera.PictureSourceType.CAMERA;
    let id= JSON.parse(localStorage.getItem('user')).$key;
    // let x=JSON.parse(localStorage.getItem('user')).vehiclenum3;
    this.policyService.startuser(id);
    this.policyService.createPhoto(this.clickedImage,JSON.parse(localStorage.getItem('user')).VehicleNumber);
    
    this.alertservice.Alert("STARTES",4,function(){},function(){})
  }

  stop()
  {
    let id= JSON.parse(localStorage.getItem('user')).$key;
    this.policyService.stopuser(id);
    
    this.alertservice.Alert("STOPS",4,function(){},function(){})
  }



   
}
