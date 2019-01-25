import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector:'login-show',
	template : `<div *ngIf="login==true">
					{{usuario}} <button (click)="salir()">Salir</button>
				</div>`,
	styles:[""]
})
export class ShowLoginComponent implements OnInit{
	@Input() login : boolean = false;
	@Input() usuario : string;
	@Output() logout = new EventEmitter();
	ngOnInit(){
		if(localStorage.getItem('User') != null){
			this.login = true;
			this.usuario = localStorage.getItem('User');
		}
	}
	salir(){
		localStorage.removeItem('User');
		this.login = false;
		this.usuario = "";
		this.logout.emit({'login':this.login});
	}
}