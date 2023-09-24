import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard.component";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { LoadingComponent } from "@shared/components/loading/loading.component";
import { AlbumCardComponent } from "@albums/components/album-card/album-card.component";
import { CreateAlbumModalComponent } from "@albums/components/create-album-modal/create-album-modal.component";
import { BaseModalComponent } from "@shared/components/base-modal/base-modal.component";
import { DeleteAlbumModalComponent } from "@albums/components/delete-album-modal/delete-album-modal.component";
import { EditAlbumModalComponent } from "@albums/components/edit-album-modal/edit-album-modal.component";

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
