import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAlbumModalComponent } from './create-album-modal.component';

describe('CreateAlbumModalComponent', () => {
    let component: CreateAlbumModalComponent;
    let fixture: ComponentFixture<CreateAlbumModalComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
        declarations: [CreateAlbumModalComponent]
        });
        fixture = TestBed.createComponent(CreateAlbumModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
