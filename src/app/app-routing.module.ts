import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/albums/components/dashboard/dashboard.component';
import { WidgetComponent } from './modules/widget/components/widget/widget.component';

const routes: Routes = [
    { path: '', pathMatch: "full", redirectTo: 'albums'},
    { path: 'albums', component: DashboardComponent },
    { path: 'widget', component: WidgetComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
