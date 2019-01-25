import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainAdminComponent } from './componentes/main/main.admin.component';
import { AgregarAdminComponent } from './componentes/agregar/agregar.admin.component';
import { EditarAdminComponent } from './componentes/editar/editar.admin.component';
import { MostrarAdminComponent } from './componentes/mostrar/mostrar.admin.component';

const adminRoutes: Routes = [{
    path: 'admin',
    component: MainAdminComponent,
    children: [
        { path: '', redirectTo: 'listado', pathMatch: 'full' },
        { path: 'listado', component: MostrarAdminComponent },
        { path: 'editar', component: EditarAdminComponent },
        { path: 'agregar', component: AgregarAdminComponent }
    ]
}];
@NgModule({
    imports: [RouterModule.forChild(adminRoutes)],
    exports: [RouterModule]
})
export class AdminRouterModule { }
