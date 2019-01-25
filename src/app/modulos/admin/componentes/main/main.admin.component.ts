import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'admin-main',
    templateUrl: './main.admin.component.html',
    styleUrls: ['./main.admin.component.scss']
})
export class MainAdminComponent implements OnInit {
    public titulo: string = "Panel de Administracion";
    ngOnInit() {

    }
}