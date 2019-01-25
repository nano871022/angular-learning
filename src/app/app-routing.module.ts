import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TiendaComponent } from './componentes/tienda/Tienda.component';
import { NotFound } from './componentes/404/404.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { AdminRouterModule } from './modulos/admin/admin.routing.module';
const routes: Routes = [
    { path: '', component: PrincipalComponent },
    { path: '', redirectTo: 'principal', pathMatch: 'full' },
    { path: 'tienda', component: TiendaComponent },
    { path: 'principal', component: PrincipalComponent },
    { path: '**', component: NotFound }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule, AdminRouterModule]
})
export class AppRoutingModule { }
