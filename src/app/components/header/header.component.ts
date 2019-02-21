import { Component } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
    pushRightClass: string = "push-right";

    constructor(public router: Router) { }

    toggleSidebar() {
        const dom: any = document.querySelector("body");
        dom.classList.toggle(this.pushRightClass);
    }

    onLoggedout() {
        localStorage.removeItem("isLoggedin");
    }
}
