import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'Angular Coding Challenge';

 
  //Show table when clicked
  public showUsers:boolean = false;
  public showTodo:boolean = false;
  public buttonUsers:any = 'USERS';
  public buttonTodo:any = 'TODO';

  //URL's
  USERS_URL = 'https://gorest.co.in/public/v1/users';
  TODO_URL = 'https://gorest.co.in/public/v1/todos';
  
  constructor(private http: HttpClient) {}

  todoData:any=[];
  
  getTodo(){
    
    this.showTodo = true;
    this.showUsers = false;

    this.http.get(this.TODO_URL).subscribe(data1 => {
      this.todoData= data1;
      this.dataSourceTodo = this.todoData['data'];
      
    });
  }  

  users:any=[];
 
  getUsers(){

    this.showUsers = true;
    this.showTodo = false;
    
    this.http.get(this.USERS_URL).subscribe(data => {
      this.users= data;
      this.dataSourceUsers = this.users['data'];
    });

  }

  displayedColumnsUsers: string[] = ['id', 'name', 'email', 'status'];
  displayedColumnsTodo: string[] = ['user_id', 'title', 'due_on', 'status'];
  dataSourceUsers = this.users['data'];
  dataSourceTodo = this.todoData['data'];
}
