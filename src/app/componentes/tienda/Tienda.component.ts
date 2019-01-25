import { Component } from '@angular/core';

@Component({
	selector : 'tienda',
	templateUrl:'./tienda.component.html',
	styleUrls:['./tienda.component.scss']
})
export class TiendaComponent {
	public nombre : string = 'Cargando...';

	click(){
		this.nombre = 'Cargando.';
	};
}