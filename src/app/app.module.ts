import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from "./app.component";
import { ChartsModule } from "ng2-charts";
import { AppRoutingModule } from "./app-routing.module";
import { FullComponent } from "./layouts/full/full.component";
import { HeaderComponent } from "./components/header/header.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { HomeComponent } from "./pages/home/home.component";
import { StatComponent } from "./components/stat/stat.component";
import { ReportComponent } from "./pages/report/report.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { BreadcrumbComponent } from "./components/breadcrumb/breadcrumb.component";
import { CardComponent } from './components/card/card.component';

@NgModule({
    declarations: [
        AppComponent,
        FullComponent,
        HeaderComponent,
        SidebarComponent,
        HomeComponent,
        StatComponent,
        ReportComponent,
        ProfileComponent,
        BreadcrumbComponent,
        CardComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        ChartsModule,
        NgbModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
