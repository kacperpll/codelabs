import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from '@albums/components/dashboard/dashboard.module';
import { WidgetModule } from './modules/widget/components/widget/widget.module';
import { NavigationModule } from '@shared/components/navigation/navigation.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
        ModalModule.forRoot(),
        ToastrModule.forRoot({
            timeOut: 3000,
            positionClass: 'toast-top-center',
            toastClass: 'ngx-toastr mt-4',
            tapToDismiss: false,
            messageClass: 'small',
        }),
        BrowserAnimationsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
