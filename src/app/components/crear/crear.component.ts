import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../../services/peticiones.service';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';


@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css'],
  providers:[
    PeticionesService
  ]
})
export class CrearComponent implements OnInit {
  title = "Formulario de registro para usuarios";

  public formRegister: FormGroup | any;

  constructor(
    private formBuilder: FormBuilder,
    private _peticionesService : PeticionesService
  ) {
    this.formRegister = {
                          "documento": "",
                          "nombres": "",
                          "tipoDocumento": "",
                          "razonSocial": "",
                          "ventasUltimoAnio": ""
                        };
  }

  ngOnInit(): void {
    // this.formRegister = this.formBuilder.group( {
    //   documento: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]],
    //   tipo: ['', [Validators.required]],
    //   nombres: ['', [Validators.required]],
    //   razonSocial: ['', [Validators.required]],
    //   ventasAnueles: ['', [Validators.required]]
    //   } )
  }

  send(formRegister: NgForm):any{
    this._peticionesService.addUser(this.formRegister).subscribe(
      response=>{
        console.log(response)},
      error => {
        console.log(<any>error)}
    )
    console.log(this.formRegister.value);

  }

}
