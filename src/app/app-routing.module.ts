import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { ReportComponent } from "./pages/report/report.component";
// import { EmployeeComponent } from "./pages/employee/employee.component";
import { ProfileComponent } from "./pages/profile/profile.component";

import { FullComponent } from "./layouts/full/full.component";

const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    {
        path: "",
        component: FullComponent,
        //     canActivate: [AuthGuard],
        children: [
            { path: "home", component: HomeComponent },
            { path: "report", component: ReportComponent },
            // { path: "employee", component: EmployeeComponent },
            { path: "profile", component: ProfileComponent },
            //         { path: "users", component: UsersComponent },
            //         { path: "users-form", component: UsersFormComponent },
            //         { path: "report-view", component: ReportViewComponent },
            //         { path: "report-form", component: ReportFormComponent }
        ]
    }
    // {
    //     path: "",
    //     component: BlankComponent,
    //     children: [
    //         {
    //             path: "lock",
    //             component: LockComponent
    //         }
    //     ]
    // }
];
@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
