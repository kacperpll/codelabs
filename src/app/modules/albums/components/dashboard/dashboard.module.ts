import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard.component";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { LoadingComponent } from "@shared/components/loading/loading.component";
import { AlbumCardComponent } from "../album-card/album-card.component";
import { CreateAlbumModalComponent } from "../create-album-modal/create-album-modal.component";
import { BaseModalComponent } from "@app/modules/shared/components/base-modal/base-modal.component";
import { DeleteAlbumModalComponent } from "../delete-album-modal/delete-album-modal.component";
import { EditAlbumModalComponent } from "../edit-album-modal/edit-album-modal.component";

@NgModule({
    declarations: [
        DashboardComponent,
        AlbumCardComponent,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        LoadingComponent,
        CreateAlbumModalComponent,
        BaseModalComponent,
        EditAlbumModalComponent,
        DeleteAlbumModalComponent,
    ],
    exports: [
        DashboardComponent,
        AlbumCardComponent,
    ],
    providers: [],
})
export class DashboardModule {}
