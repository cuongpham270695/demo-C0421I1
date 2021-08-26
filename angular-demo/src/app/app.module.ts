import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserListComponent} from './components/users/user-list/user-list.component';
import {NavbarComponent} from './components/core/navbar/navbar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserAddComponent} from './components/users/user-add/user-add.component';
import {MasterComponent} from './components/layouts/master/master.component';
import {FooterComponent} from './components/layouts/core/footer/footer.component';
import {SidebarComponent} from './components/layouts/core/sidebar/sidebar.component';
import {TopbarComponent} from './components/layouts/core/topbar/topbar.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {LoginComponent} from './components/login/login.component';
import {MessageComponent} from './components/share/message/message.component';
import {InputSearchComponent} from './components/share/input-search/input-search.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UserDetailComponent} from "./components/users/user-detail/user-detail.component";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {EditUserComponent} from './components/users/edit-user/edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    NavbarComponent,
    UserAddComponent,
    MasterComponent,
    FooterComponent,
    SidebarComponent,
    TopbarComponent,
    DashboardComponent,
    LoginComponent,
    MessageComponent,
    InputSearchComponent,
    UserDetailComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
