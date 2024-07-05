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
  // status='Pending';
constructor(private api : ApiserviceService, private router: Router){
}
ngOnInit() {
  this.getAllData();
}


// statusUpdate(ID:any){
//   this.api.updateStatus(ID, this.readTask).subscribe((data:any)=>{
//     console.log(data);
//     this.getAllData();
//     })
// }
// done(ID:any){
//   const task = this.readTask.find((task: { ID: any; }) => task.ID === ID);
//     if (task.status === 'Pending') {
//       task.status = 'Done'; 
//       // console.log(`Task ${task.ID} marked as done`);
//     }else {
//       task.status = 'Pending'; 
//     }
// }

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


