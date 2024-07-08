import { Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent {
  readTask: any;
constructor(private api : ApiserviceService, private router: Router){
}
ngOnInit() {
  this.getAllData();
}

home(){
  this.router.navigate(['home']);
}

onLogout(){
  this.router.navigate(['login']);
}

getAllData() {
  this.api.getAllTasks().subscribe((res) => {
    console.log('get all tasks', res);
    this.readTask = res.data;
  })
}
}


