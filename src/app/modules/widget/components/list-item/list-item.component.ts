import { Component, Input, OnInit } from '@angular/core';
import { ListItem } from '../widget/widget.component';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
    @Input() item: ListItem;
    @Input() index: number;

    positionClass: string;

    ngOnInit(): void {
        this.positionClass = `bi-${!!this.item.position ? this.item.position : this.index+1}-circle`;
    }
}
