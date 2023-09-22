import { Component, Input } from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.scss'],
    imports: [],
})
export class LoadingComponent {
    @Input() _class: string = '';
}
