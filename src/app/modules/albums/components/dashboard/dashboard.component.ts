import { Component } from '@angular/core';
import { AlbumsService } from '../../services/albums.services';
import { Subject, finalize, takeUntil } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
    private destroy$: Subject<boolean> = new Subject<boolean>();

    public albums: Album[] = [];
    public loading: boolean = false;

    constructor(
        private albumsService: AlbumsService,
    ) {}

    ngOnInit() {
        console.log('Dashboard component initialized!');
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
                    console.log(albums);
                    this.albums = albums;
                },
                error: (err) => {
                    console.log(err);
                },
            });
    }

}

// There can be seperate files for interfaces
export interface Album {
    userId: number;
    id: number;
    title: string;
}
