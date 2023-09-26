import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {
    public dataForSelector: WidgetDataObject = {
        week: {
            loader: {
                current: 38,
                max: 50,
            },
            mins: 12,
            streak: {
                current: 4,
                best: 12,
            },
            list: [
                {
                    name: 'Walter Wynne',
                    range: 105,
                },
                {
                    name: 'Annabel Ferdinand',
                    range: 52,
                    status: 'end'
                },
                {
                    name: 'Marty McFly',
                    range: 50,
                },
                {
                    name: 'You!',
                    range: 38,
                    status: 'active',
                    position: 7,
                },
            ]
        },
        month: {
            loader: {
                current: 12,
                max: 50,
            },
            mins: 186,
            streak: {
                current: 7,
                best: 44,
            },
            list: [
                {
                    name: 'Walter Wynne',
                    range: 220,
                },
                {
                    name: 'Marty McFly',
                    range: 140,
                },
                {
                    name: 'Annabel Ferdinand',
                    range: 87,
                    status: 'end'
                },
                {
                    name: 'You!',
                    range: 12,
                    status: 'active',
                    position: 5,
                },
            ],
        },
    };
    public selectedData: WidgetData;
    public range: string = 'week';

    constructor() {}

    ngOnInit(): void {
        this.updateValues();
    }

    onChange(newRange: string) {
        this.range = newRange;
        this.updateValues();
    }

    updateValues() {
        this.selectedData = this.dataForSelector[this.range];
        document.documentElement.style.setProperty('--current-loader', this.selectedData.loader.current.toString());
        document.documentElement.style.setProperty('--max-loader', this.selectedData.loader.max.toString());
    }
}

export interface WidgetDataObject {
    [key: string]: WidgetData;
}

export interface WidgetData {
    loader: {
        current: number;
        max: number;
    };
    mins: number;
    streak: {
        current: number;
        best: number;
    };
    list: ListItem[];
};

export interface ListItem {
    name: string;
    range: number;
    status?: string;
    position?: number;
}
