import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
    @Input() item: any;
    @Input() index: any;

    positionClass: string;

    ngOnInit(): void {
        console.log(this.item)
        this.positionClass = `bi-${!!this.item.position ? this.item.position : this.index+1}-circle`;
    }
}
