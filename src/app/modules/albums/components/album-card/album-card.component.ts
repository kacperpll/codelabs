import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Album } from '../dashboard/dashboard.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { EditAlbumModalComponent } from '../edit-album-modal/edit-album-modal.component';
import { DeleteAlbumModalComponent } from '../delete-album-modal/delete-album-modal.component';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent {
    @Input() album: Album;
    @Output() editAlbumsUpdate = new EventEmitter<Album>();
    @Output() deleteAlbumsUpdate = new EventEmitter<number>();

    constructor(
        private modalService: BsModalService,
    ) {}

    showEditAlbumModal() {
        const bsModalRef: BsModalRef = this.modalService.show(
            EditAlbumModalComponent,
            {
                class: 'modal-dialog-centered',
                ignoreBackdropClick: true,
                initialState: {
                    album: this.album,
                },
            }
        );
        bsModalRef.content.albumEdited.subscribe((album: Album) => {
            this.editAlbumsUpdate.emit(album);
        });
    }

    showDeleteAlbumModal() {
        const bsModalRef: BsModalRef = this.modalService.show(
            DeleteAlbumModalComponent,
            {
                class: 'modal-dialog-centered',
                ignoreBackdropClick: true,
                initialState: {
                    albumId: this.album.id,
                },
            }
        );
        bsModalRef.content.albumDeleted.subscribe((albumId: number) => {
            this.deleteAlbumsUpdate.emit(albumId);
        });
    }
}
