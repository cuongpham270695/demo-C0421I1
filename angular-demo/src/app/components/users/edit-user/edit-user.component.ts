import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  formEditUser?: FormGroup;
  // @ts-ignore
  id = +this.activatedRoute.snapshot.paramMap.get('id');
  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    // @ts-ignore

    let userEdit = this.userService.findByIndex(this.id);
    console.log(userEdit);
    this.formEditUser = this.fb.group({
      name: [userEdit.name],
      email: [userEdit.email],
      address: [userEdit.address],
      phone: [userEdit.phone],
    })
  }

  submitForm() {
    let data = this.formEditUser?.value;
    this.userService.updateUser(this.id,data);
    this.router.navigate(['admin/users']).then()
  }

  get name() {
    return this.formEditUser?.get('name');
  }

  get email() {
    return this.formEditUser?.get('email');
  }

  get address() {
    return this.formEditUser?.get('address');
  }

  get phone() {
    return this.formEditUser?.get('phone')
  }
}
