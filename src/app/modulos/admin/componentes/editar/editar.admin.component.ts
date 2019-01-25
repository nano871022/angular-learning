import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'editar-admin',
    template: '{{titulo}}',
    styleUrls: []
})
export class EditarAdminComponent implements OnInit {
    public titulo: string = "Editar";
    ngOnInit() {

    }
}