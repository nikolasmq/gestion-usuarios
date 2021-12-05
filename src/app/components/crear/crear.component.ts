import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
  title = "Formulario de registro para usuarios";
  
  public form!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group( {
      documento: ['', [Validators.required, Validators.email]],
      tipo: ['', [Validators.required]],
      nombres: ['', [Validators.required]],
      razonSocial: ['', [Validators.required]],
      ventasAnueles: ['', [Validators.required]]
      } )
  }
  send():any{
    console.log(this.form.value);
    
  }

}
