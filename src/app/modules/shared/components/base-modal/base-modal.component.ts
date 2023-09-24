import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
    standalone: true,
    selector: 'app-base-modal',
    templateUrl: './base-modal.component.html',
    styleUrls: ['./base-modal.component.scss'],
    imports: [
        CommonModule,
    ],
})
export class BaseModalComponent {
    constructor(
        private bsModalRef: BsModalRef,
    ) {}

    hideModal(): void {
        this.bsModalRef.hide();
    }
}
