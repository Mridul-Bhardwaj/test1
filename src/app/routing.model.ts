import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';


const appRoutes: Routes = [
    { path: 'maniakas', component: UserListComponent }

]

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes)],
    exports: [ RouterModule]
})
export class AppRoutingModule {

}