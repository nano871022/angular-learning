import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TiendaComponent } from './componentes/tienda/Tienda.component'
import { NotFound } from './componentes/404/404.component'
import { PrincipalComponent } from './componentes/principal/principal.component';
import { LoginModule } from './modulos/login/login.module';
import { AdminModule } from './modulos/admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    NotFound,
    PrincipalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LoginModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
