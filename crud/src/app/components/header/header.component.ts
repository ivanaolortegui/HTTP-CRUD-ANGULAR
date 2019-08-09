import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  routeUser: boolean;
  routeUsers: boolean;
  routeNewUsers: boolean;

  constructor(private router: Router) {}

  ngOnInit() {
    if (this.router.url === "/usuarios") {
      this.routeUser = false;
      this.routeUsers = true;
      this.routeNewUsers = false;
    } else if (this.router.url === "/usuarios/usuario") {
      this.routeUser = false;
      this.routeUsers = false;
      this.routeNewUsers = true;
    } else {
      this.routeUser = true;
      this.routeUsers = false;
      this.routeNewUsers = false;
    }
    console.log(this.router.url);
    
  }
}
