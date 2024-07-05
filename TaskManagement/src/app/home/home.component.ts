import { ApplicationConfig, Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private api: ApiserviceService, private router: Router) { }
  readTask: any;
  ngOnInit() {
    this.getAllData();
  }

  noti(){
    this.router.navigate(['/notifications']);
  }

  onLogout(){
    this.router.navigate(['/login']);
  }
  newTask(){
    this.router.navigate(['/add-task']);
  }

  deleteId(id:any) {
    this.api.deleteData(id).subscribe(
      (res) => {
        console.log('delete task', res);
        this.getAllData();
      },
      (error) => {
        console.error('Error deleting task', error);
      }
    );
  }

  //Update data
  updateData(id:any, data:any) {
    this.api.updateData(id, data).subscribe((res) => {
      console.log('update task', res);
      this.getAllData();
      })
  }

  getAllData() {
    this.api.getAllTasks().subscribe((res) => {
      console.log('get all tasks', res);
      this.readTask = res.data;
    })
  }
}
