import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'agregar-admin',
    template: '{{titulo}}',
    styleUrls: []
})
export class AgregarAdminComponent implements OnInit {
    public titulo: string = "Agregar";
    ngOnInit() {

    }
}