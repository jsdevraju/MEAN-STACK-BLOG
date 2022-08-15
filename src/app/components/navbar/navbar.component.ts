import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { MENU } from "src/app/data";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
})
export class NavbarComponent implements OnInit {
  public menuData: any[] = MENU;
  public token: string = "";
  public user: any = {};

  constructor(
    private api: ApiService,
    private toaster: ToastrService,
    private router: Router
  ) {}

  logout() {
    if (this.token) {
      this.api.logoutUser(this.token);
      this.toaster.success("You are logged out successfully");
      localStorage.removeItem("user");
      this.api.userState = "";
      this.token = ""
      this.user = ""
      this.router.navigate(["/login"]);
    }
  }

  ngOnInit(): void {
    this.token = this.api.userState?.token;
    this.user = this.api.userState?.user;
  }

  ngOnChanges() {
    console.log("hell")
  }
}
