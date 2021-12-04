import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../../services/peticiones.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
  providers:[
    PeticionesService
  ]
})
export class ListarComponent implements OnInit {

  public users:any;

  constructor(
    private _peticionesService : PeticionesService
  ) { }

  ngOnInit() {
    this._peticionesService.getUser().subscribe(
      result =>{
        this.users = result;
        console.log(result);
      },
      error => {
        console.log(<any>error);
        
      }
    )
  }

}
