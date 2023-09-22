import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard.component";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { LoadingComponent } from "@shared/components/loading/loading.component";

@NgModule({
    declarations: [
        DashboardComponent,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        LoadingComponent,
    ],
    exports: [
        DashboardComponent,
    ],
    providers: [],
})
export class DashboardModule {}
