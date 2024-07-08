import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent implements OnInit {
  errMsg: string | undefined;
  getparamid: any;
  status: any;

  // userForm!:FormGroup
  priorities = ['High', 'Medium', 'Low'];
  constructor(private api: ApiserviceService, private router: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    this.getparamid = this.router.snapshot.paramMap.get('id');
    console.log(this.getparamid);
    if (this.getparamid) {
      this.api.getSingleData(this.getparamid).subscribe((res) => {
        console.log(res, 'selected update data');
        this.userForm.patchValue({
          Name: res.data[0].Name,
          Description: res.data[0].Description,
          Priority: res.data[0].Priority,
          // Status: res.data[0].status,
          Date: res.data[0].Date,
        })
      })
    }
  }

  userForm = new FormGroup({
    'Name': new FormControl('', Validators.required),
    'Description': new FormControl('', Validators.required),
    'Date': new FormControl('', Validators.required),
    'Priority': new FormControl('', Validators.required),

  })
  taskSubmit() {
    // console.log(this.userForm.value);
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      this.api.addTask(this.userForm.value).subscribe((res) => {
        console.log(res, "Data added successfuly");
      })
      this.route.navigate(['/home'])
    }
    else {
      this.errMsg = 'All fields are required';
    }
  }

  completed() {
    this.api.completedTask(this.getparamid).subscribe((res) => {
      console.log(res, 'completed task');
      console.log(this.getparamid)
       // Navigate after the task is completed
    })
    this.route.navigate(['/home']);
  }

  taskUpdate() {
    console.log(this.userForm.value);
    console.log();
    if (this.userForm.valid) {
      this.api.updateData(this.getparamid,this.userForm.value).subscribe((res) => {
        console.log(res, "Data updated successfuly");
      })
      this.route.navigate(['/home'])
    }
    else {
      this.errMsg = 'All fields are required';
    }
  }

  onCancel(){
    this.route.navigate(['/home'])
  }

  onLogout(){
    this.route.navigate(['/login']);
  }
}