import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  apiUrl="http://localhost:3000/tasks";
  createUrl="http://localhost:3000/tasks";
  updateUrl="http://localhost:3000/tasks/status";
  loginUrl="http://localhost:3000/tasks/login";
  constructor(private http:HttpClient) { }

  //Get all tasks
  getAllTasks():Observable<any>{
    return this.http.get(this.apiUrl);
    //return this.http.get('${this.apiUrl}');
  }

  //Add-Task
  addTask(data:any):Observable<any>{
    return this.http.post(this.apiUrl,data);
    //return this.http.post('${this.apiUrl}',data);
    }

    deleteData(ID:any):Observable<any>{
      let ids=ID;
      //return this.http.delete(this.createUrl);
      return this.http.delete(`${this.createUrl}/${ids}`);
    }

    //update data
    updateData(ID:any,data:any):Observable<any>{
      console.log(data)
      let ids=ID;
      // return this.http.put(this.createUrl,data);
      return this.http.put(`${this.createUrl}/${ids}`,data);
      }

      getSingleData(ID:any):Observable<any>{
        let ids=ID;
        return this.http.get(`${this.createUrl}/${ids}`);
      }

      completedTask(id: any): Observable<any> {
        let ID=id
        const updatedStatus = { status: 'Done' };
        return this.http.put(`${this.updateUrl}/${ID}`, updatedStatus);
      }

      login(email: string, password: string): Observable<any> {
        return this.http.post<any>(this.loginUrl, { email, password });
      }
      
}
