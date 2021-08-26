import { Injectable } from '@angular/core';
import {IUser} from "../components/users/iuser";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: IUser[] = [
    {
      name: "Cuong Pham",
      email: "cuong@gmail.com",
      phone: "0962291436",
      address: "Ha Noi",
      // image: "https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png"
    },

    {
      name: "Hoang Lan",
      email: "lan.hoang@gmail.com",
      phone: "0984588745",
      address: "Binh Dinh",
      image: "https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg"
    },

    {
      name: "Chau Bui",
      email: "chau.bui@gmail.com",
      phone: "0884478865",
      address: "HCM",
      image: "https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png"
    }
  ];
  constructor() { }

  getAll() {
    return this.users;
  }

  findUserByKeyword(keyword: string) {
    return this.users.filter(user => {
      return (user.name?.toLowerCase()?.indexOf(keyword) != -1);
    })
  }

  destroyUser(index: number) {
    this.users.splice(index,1);
  }

  findByIndex(index: number) {
    return this.users[index];
  }

  updateUser(index: number,data: IUser) {
    this.users[index] = data;
  }
}
