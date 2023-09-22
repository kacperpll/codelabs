import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard.component";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { LoadingComponent } from "@shared/components/loading/loading.component";
import { AlbumCardComponent } from "../album-card/album-card.component";

@NgModule({
    declarations: [
        DashboardComponent,
        AlbumCardComponent,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        LoadingComponent,
    ],
    exports: [
        DashboardComponent,
        AlbumCardComponent,
    ],
    providers: [],
})
export class DashboardModule {}
