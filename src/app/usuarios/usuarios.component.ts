import { Component, OnInit } from '@angular/core';
import {UsuariosService} from "./shared/usuarios.service";
import {User} from "./shared/user";


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  providers: [UsuariosService]
})
export class UsuariosComponent implements OnInit {

  private users: User[] = [];

  constructor(private usersService: UsuariosService) { }

  ngOnInit() {
    this.usersService.getUsers()
      .subscribe(data => this.users = data);
  }

  deleteUser(user){

  }
}
