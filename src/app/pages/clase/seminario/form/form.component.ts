import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SeminarioService } from 'src/app/providers/services/seminario.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  seminario: any;
  @Input() item: any;
  @Input() id_seminario: any;
  @Input() title: any;
  idSeminario: string;
  isUpdating: boolean;

  formGroup: FormGroup;
  constructor(public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private SeminarioService: SeminarioService) { }

  ngOnInit(): void {
    this.inicio();
    this.isUpdating = false;
    if (this.item) {
      this.updateData();
    } else {
      this.item = [];
      this.id_seminario = '';
    }
    console.log(this.item);
  }

  private inicio(): any {
    const controls = {
      // idEmployee: ['', [Validators.required]],
      nomseminario: ['', [Validators.required]],
      semiFecha: [''],
      servicioEspiritual: [''],

    };
    this.formGroup = this.formBuilder.group(controls);

}

save(name: any): void {
  console.log("Validación de formulario: ...", this.formGroup.valid);
  if (this.formGroup.invalid){
    this.formGroup.markAllAsTouched();
    return;
  }
  // this.formGroup.reset();
  const save: any = {
    nomseminario:       name.nomseminario,
    semiFecha:          name.semiFecha,
    servicioEspiritual: name.servicioEspiritual,
  };
  this.SeminarioService.add$(save).subscribe(response => {
    if (response.success) {
      this.activeModal.close({ success: true, message: response.message });
    } else {
    }
  }, () => { }, () => {  });
}

update(name: any): void {
  if (this.formGroup.invalid){
    this.formGroup.markAllAsTouched();
    return;
  }
  // this.formGroup.reset();
  const save: any = {
    idSeminario:this.idSeminario,
    nomseminario:name.nomseminario,
    semiFecha:name.semiFecha,
    servicioEspiritual:name.servicioEspiritual,
  }
  this.SeminarioService.update$(this.idSeminario, save).subscribe(response => {
    if (response.success) {
      this.activeModal.close({ success: true, message: response.message });
    } else {
    }
  }, () => { }, () => {  });
}

updateData(): any {
  const data = this.item;
  this.isUpdating = true;
  this.idSeminario = data.idSeminario;
  this.formGroup.patchValue({
    nomseminario: data.nomseminario,
    semiFecha: data.semiFecha,
    servicioEspiritual: data.servicioEspiritual,
  });
}

public func() {
  this.activeModal.close();
}

validaForm(campo: string) {
  return this.formGroup.controls[campo].errors &&
    this.formGroup.controls[campo].touched;
}


}
