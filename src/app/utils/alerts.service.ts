import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root',
})
export class AlertsService {
    constructor(
        private toastr: ToastrService,
    ) {}

    showSuccessMessage(message: string, title = ''): void {
        this.toastr.success(message, title);
    }

    showErrorMessage(message: string, title = ''): void {
        this.toastr.error(message, title);
    }
}
