import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WidgetComponent } from "./widget.component";
import { ListItemComponent } from '@widget/components/list-item/list-item.component';
import { FormsModule } from "@angular/forms";


@NgModule({
    declarations: [
        WidgetComponent,
        ListItemComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
    ],
    exports: [
        WidgetComponent,
    ],
    providers: [],
})
export class WidgetModule {}
