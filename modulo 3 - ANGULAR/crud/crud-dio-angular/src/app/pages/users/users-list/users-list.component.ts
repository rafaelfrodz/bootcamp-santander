import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: Array<User> = []

  constructor(private userServices: UserService) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(): void {
    this.userServices.getUsers().subscribe(response => this.users = response), (err: any) => console.log(`ERRO AO EXECUTAR ${err.status}`)
  }

  deleteUser(id: number): void {
    this.userServices.deleteUser(id).subscribe(response => console.log('Usuario excluido'), (err) => console.log(err), () => this.getUsers())
  }

}
