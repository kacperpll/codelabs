import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { BaseModalComponent } from '@shared/components/base-modal/base-modal.component';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AlbumsService } from '../../services/albums.services';
import { AlertsService } from '@app/utils/alerts.service';
import { Subject, finalize, takeUntil } from 'rxjs';

@Component({
    standalone: true,
    selector: 'app-delete-album-modal',
    templateUrl: './delete-album-modal.component.html',
    styleUrls: ['./delete-album-modal.component.scss'],
    imports: [
        BaseModalComponent,
    ],
})
export class DeleteAlbumModalComponent implements OnDestroy {
    @Input() albumId: number;
    @Output() albumDeleted = new EventEmitter<number>();

    processing: boolean = false;

    private destroy$: Subject<boolean> = new Subject<boolean>();

    constructor(
        private bsModalRef: BsModalRef,
        private albumsService: AlbumsService,
        private alertsService: AlertsService,
    ) {}

    ngOnDestroy(): void {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }

    deleteAlbum() {
        this.processing = true;

        this.albumsService
            .deleteAlbum(this.albumId)
            .pipe(takeUntil(this.destroy$))
            .pipe(finalize(() => { this.processing = false; }))
            .subscribe({
                next: () => {
                    this.albumDeleted.emit(this.albumId);
                    this.bsModalRef.hide();
                    this.alertsService.showSuccessMessage('Album deleted!', 'Success!');
                },
                error: (err) => {
                    console.log(err);
                    this.alertsService.showErrorMessage('Couldn\'t delete album', 'Error deleting album');
                },
            });
    }

}
