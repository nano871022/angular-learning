import { Component, OnInit ,NgModule, Input ,Output, EventEmitter } from '@angular/core';

 @Component({
 	selector:'login-form',
 	templateUrl:'./formulario.login.component.html',
 	styleUrls:['./formulario.login.component.scss']
 }) 
 export class FormularioLoginComponent implements OnInit{
	public usuario : string;
	public contrasena : string;
	public error : string = "";
	public login : boolean = false;
	@Input() show  : boolean ;
	@Output() logged = new EventEmitter();
 
	validar(){
		this.error = "";
		if(this.usuario.trim().length > 0 ){ 
			if(this.contrasena.trim().length > 4 ){
				localStorage.setItem("User",this.usuario);
				this.login = true;
			}else{
				this.error += "Problema con validacion de contraseña."
			}
		}else{
				this.error += "Problema con validacion de usuario."
			}
			if(this.login){
				this.logged.emit({
					'user':this.usuario,
					'login':this.login
				});
				this.usuario = "";
		    }
			this.contrasena = "";
	}	

	ngOnInit(){
		if(localStorage.getItem("User")!=null){
			this.usuario = localStorage.getItem("User");
			this.login = true;
			this.logged.emit({
				'user':this.usuario,
				'login':this.login
			});
		}
	}

	cerrar(){
		this.show = false;
		this.usuario = "";
		this.contrasena = "";
		this.logged.emit({
				'user':this.usuario,
				'login':this.login
			});
	}

 }