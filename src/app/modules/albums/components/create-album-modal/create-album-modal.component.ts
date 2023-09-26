import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { BaseModalComponent } from '@shared/components/base-modal/base-modal.component';
import { AlbumsService } from '@albums/services/albums.services';
import { Subject, finalize, takeUntil } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AlertsService } from '@app/utils/alerts.service';

@Component({
    standalone: true,
    selector: 'app-create-album-modal',
    templateUrl: './create-album-modal.component.html',
    styleUrls: ['./create-album-modal.component.scss'],
    imports: [
        BaseModalComponent,
        FormsModule,
    ],
})
export class CreateAlbumModalComponent implements OnDestroy {
    @Output() albumCreated = new EventEmitter();

    public processing: boolean = false;
    public title: string;

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

    createAlbum() {
        this.processing = true;

        this.albumsService
            .createAlbum(this.title)
            .pipe(takeUntil(this.destroy$))
            .pipe(finalize(() => { this.processing = false; }))
            .subscribe({
                next: (album: any) => {
                    this.albumCreated.emit(album);
                    this.bsModalRef.hide();
                    this.alertsService.showSuccessMessage('Album created!', 'Success!');
                },
                error: (err) => {
                    console.error(err);
                    this.alertsService.showErrorMessage('Couldn\'t create album', 'Error creating album');
                },
            });
    }
}
