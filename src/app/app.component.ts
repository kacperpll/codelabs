import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlbumsService } from './modules/albums/services/albums.services';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    public title = 'codelabs';

    private destroy$: Subject<boolean> = new Subject<boolean>();

    constructor(
    ) {}

    ngOnInit() {
        console.log('App component initialized!');
    }

    ngOnDestroy(): void {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
}
