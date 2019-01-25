import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRouterModule } from './admin.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MainAdminComponent } from './componentes/main/main.admin.component';
import { AgregarAdminComponent } from './componentes/agregar/agregar.admin.component';
import { EditarAdminComponent } from './componentes/editar/editar.admin.component';
import { MostrarAdminComponent } from './componentes/mostrar/mostrar.admin.component';

@NgModule({
    declarations: [MainAdminComponent, AgregarAdminComponent, EditarAdminComponent, MostrarAdminComponent],
    imports: [CommonModule, FormsModule, AdminRouterModule, BrowserModule, HttpClientModule],
    exports: [MainAdminComponent]
})
export class AdminModule { }