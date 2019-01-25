import { Component , OnInit } from '@angular/core';

@Component({
	selector:'NotFound404',
	templateUrl:'404.component.html',
	styleUrls:['404.component.scss']

})
export class NotFound{
	public pagina : string = "No registrada";

	ngOnInit(){
		var url = document.URL.split("/");
		this.pagina = url[url.length-1];
	}

}