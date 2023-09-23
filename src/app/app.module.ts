import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from '@albums/components/dashboard/dashboard.module';
import { WidgetModule } from './modules/widget/components/widget/widget.module';
import { NavigationModule } from '@shared/components/navigation/navigation.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        DashboardModule,
        WidgetModule,
        NavigationModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
