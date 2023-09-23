import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { WidgetComponent } from "./widget.component";

@NgModule({
    declarations: [
        WidgetComponent,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
    ],
    exports: [
        WidgetComponent,
    ],
    providers: [],
})
export class WidgetModule {}
