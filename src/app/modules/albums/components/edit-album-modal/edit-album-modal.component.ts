import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BaseModalComponent } from '@shared/components/base-modal/base-modal.component';
import { Album } from '@albums/components/dashboard/dashboard.component';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AlbumsService } from '@albums/services/albums.services';
import { AlertsService } from '@app/utils/alerts.service';

@Component({
    standalone: true,
    selector: 'app-edit-album-modal',
    templateUrl: './edit-album-modal.component.html',
    styleUrls: ['./edit-album-modal.component.scss'],
    imports: [
        BaseModalComponent,
        FormsModule,
    ],
})
export class EditAlbumModalComponent {
    @Input() set album(album: Album) {
        this._album = album;
        this.title = album.title;
    }
    @Output() albumEdited = new EventEmitter();

    get album(): Album {
        return this._album;
    }
    private _album: Album;
    public title: string;

    public processing: boolean = false;
    public validTitle: boolean = false;

    constructor(
        private bsModalRef: BsModalRef,
        private albumsService: AlbumsService,
        private alertsService: AlertsService,
    ) {}

    editAlbum() {
        this.processing = true;

        this.albumsService
            .editAlbum({
                ...this.album,
                title: this.title,
            })
            .subscribe({
                next: (album: any) => {
                    console.log(album);
                    this.albumEdited.emit(album);
                    this.bsModalRef.hide();
                    this.alertsService.showSuccessMessage('Album edited!', 'Success!');
                },
                error: (err) => {
                    console.log(err);
                    this.alertsService.showErrorMessage('Couldn\'t edit album', 'Error editing album');
                },
            });
    }

    validateTitle() {
        if (this.title !== this.album.title && this.title.length >= 1) {
            this.validTitle = true;
        } else {
            this.validTitle = false;
        }
    }
}
