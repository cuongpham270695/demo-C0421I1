import {Component, OnInit} from '@angular/core';
import {IUser} from "../iuser";
import {MatDialog} from "@angular/material/dialog";
import {UserDetailComponent} from "../user-detail/user-detail.component";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  text: string = ''
  pageTitle?: string = 'User list';
  imageSize: number = 100;
  showImage: boolean = false;
  message?: string = "";
  formAddUser?: FormGroup;
  users: IUser[] = [];
  userFilter: IUser[] = [];

  constructor(public dialog: MatDialog,
              private fb: FormBuilder,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.formAddUser = this.fb.group({
      name: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(30)]],
      email: ['',[Validators.required,Validators.email]],
      address:['',[Validators.required,Validators.minLength(2)]],
      phone: ['',[Validators.required,Validators.pattern('\^[0][7-9][0-9]{8}\$')]],
    });
    this.users = this.userService.getAll();
    this.userFilter = this.users;
  }

  ngOnChanges() {

  }

  ngDoCheck() {

  }

  showHideImage() {
    this.showImage = !this.showImage;
  }

  changeImageSize(event: any) {
    this.imageSize = event.target.value
    console.log(event.target.value)
  }

  searchUser(event: any) {
    let keyword = event.toLowerCase();
    this.userFilter = (keyword) ? this.userService.findUserByKeyword(keyword) : this.users;
  }

  delete(index:number) {
    if (confirm("Are you sure about that ?")) {
      this.userService.destroyUser(index);
      this.users = this.userService.getAll();
      this.text = "Delete user success!";
    }
  }

  showDetail(index: number): void {
    let user = this.users[index];
    const dialogRef = this.dialog.open(UserDetailComponent, {
      width: '250px',
      data: {name: user.name, email: user.email, address: user.address, phone: user.phone}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  submitForm(){
    let data = this.formAddUser?.value;
    this.users.push(data);
  }

  get name() {
    return this.formAddUser?.get('name');
  }

  get email() {
    return this.formAddUser?.get('email');
  }

  get address() {
    return this.formAddUser?.get('address');
  }

  get phone() {
    return this.formAddUser?.get('phone')
  }
}
