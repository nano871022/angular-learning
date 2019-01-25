import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'login',
    template: `<section class='login'>
		         <div *ngIf="login==false">
		 	         <span (click)="mostrarFormulario()">Iniciar Sesion</span>
		         </div>
			     <login-show [login]="login" [usuario]="usuario" (logout)="logout($event)" ></login-show>
			     <login-form [show]="showForm" (logged)="logged($event)"> </login-form>
		</section>	`,
    styleUrls: ['./main.login.component.scss', '../formulario/formulario.login.component.scss']
})
export class MainLoginComponent implements OnInit {
    public login: boolean = false;
    public showForm: boolean = false;
    public usuario: string = "";
    ngOnInit() { }
    mostrarFormulario() {
        this.showForm = true;

    }
    logged(event) {
        console.log(event);
        this.login = event.login;
        this.showForm = false;
        this.usuario = event.user;
    }
    logout(event) {
        this.login = event.login;
        this.showForm = false;
        this.usuario = "";
    }
}