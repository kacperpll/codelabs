import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard.component";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        DashboardComponent,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
    ],
    exports: [
        DashboardComponent,
    ],
    providers: [],
})
export class DashboardModule {}
