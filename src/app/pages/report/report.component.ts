import { Component } from "@angular/core";
import { routerTransition } from "../../router.animations";

@Component({
    selector: "app-report",
    templateUrl: "./report.component.html",
    styleUrls: ["./report.component.scss"],
    animations: [routerTransition()]
})
export class ReportComponent {
    // bar chart
    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public barChartLabels: string[] = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
    ];
    public barChartType: string = "bar";
    public barChartLegend: boolean = true;

    public barChartData: any[] = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: "Vendas" }
    ];

    constructor() {}

    // events
    public chartClicked(e: any): void {
        // console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }
}
