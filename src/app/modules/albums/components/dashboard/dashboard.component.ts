import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlbumsService } from '@albums/services/albums.services';
import { Subject, finalize, takeUntil } from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CreateAlbumModalComponent } from '@albums/components/create-album-modal/create-album-modal.component';
import { AlertsService } from '@app/utils/alerts.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnDestroy, OnInit{
    private destroy$: Subject<boolean> = new Subject<boolean>();

    public albums: Album[];
    public loading: boolean = false;

    constructor(
        private albumsService: AlbumsService,
        private modalService: BsModalService,
        private alertsService: AlertsService,
    ) {}

    ngOnInit() {
        this.getAlbums();
    }

    ngOnDestroy(): void {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }

    getAlbums() {
        this.loading = true;

        this.albumsService
            .getAlbums()
            .pipe(takeUntil(this.destroy$))
            .pipe(finalize(() => { this.loading = false; }))
            .subscribe({
                next: (albums: any) => {
                    this.albums = albums;
                },
                error: (err) => {
                    console.log(err);
                    this.alertsService.showErrorMessage('Couldn\'t load list of albums', 'Error fetching albums');
                },
            });
    }

    showCreateAlbumModal() {
        const bsModalRef: BsModalRef = this.modalService.show(
            CreateAlbumModalComponent,
            {
                class: 'modal-dialog-centered',
                ignoreBackdropClick: true,
            }
        );
        bsModalRef.content.albumCreated.subscribe((album: Album) => {
            console.log(album);
            this.albums.unshift(album);
        });
    }

    editAlbumsUpdate(album: Album) {
        const index = this.albums.findIndex((a) => a.id === album.id);
        this.albums[index] = album;
    }

    deleteAlbumsUpdate(albumId: number) {
        console.log("Delete", albumId);
        const index = this.albums.findIndex((a) => a.id === albumId);
        this.albums.splice(index, 1);
    }

}

// There can be a seperate file for interfaces
export interface Album {
    userId: number;
    id: number;
    title: string;
}
