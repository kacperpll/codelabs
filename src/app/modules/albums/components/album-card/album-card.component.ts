import { Component, Input } from '@angular/core';
import { Album } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent {
    @Input() album: Album = {} as Album;
}
