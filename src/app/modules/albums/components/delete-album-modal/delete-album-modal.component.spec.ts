import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAlbumModalComponent } from './delete-album-modal.component';

describe('DeleteAlbumModalComponent', () => {
    let component: DeleteAlbumModalComponent;
    let fixture: ComponentFixture<DeleteAlbumModalComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
        declarations: [DeleteAlbumModalComponent]
        });
        fixture = TestBed.createComponent(DeleteAlbumModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
