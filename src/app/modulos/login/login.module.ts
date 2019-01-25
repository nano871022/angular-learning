import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShowLoginComponent }from './mostrar/show.login.component';
import { FormularioLoginComponent }from './formulario/formulario.login.component';
import { MainLoginComponent } from './main/main.login.component';

@NgModule({
	imports:[CommonModule,FormsModule],
	declarations:[
	ShowLoginComponent,
	FormularioLoginComponent,
	MainLoginComponent
	],
	exports:[MainLoginComponent]
})
export class LoginModule{}