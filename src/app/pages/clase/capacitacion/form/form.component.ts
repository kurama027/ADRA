import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CapacitacionService } from 'src/app/providers/services/capacitacion.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  especie: any;
  @Input() item: any;
  @Input() id_capaciatacion: any;
  @Input() title: any;
  idCapacitacion: string;
  isUpdating: boolean;

  formGroup: FormGroup;
  constructor(public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private capacitacionService: CapacitacionService) { }

  ngOnInit(): void {
    this.inicio();
    this.isUpdating = false;
    if (this.item) {
      this.updateData();
    } else {
      this.item = [];
      this.id_capaciatacion = '';
    }
    console.log(this.item);
  }

  private inicio(): any {
    const controls = {
      // idEmployee: ['', [Validators.required]],
      nomCapaciatacion: ['', [Validators.required]],
      modulos: ['', [Validators.required]],
      sesiones: [''],
      materiales: [''],
      capaFecha: [''],
      capaFechafin: [''],
    };
    this.formGroup = this.formBuilder.group(controls);

}

save(name: any): void {
  if (this.formGroup.invalid){
    this.formGroup.markAllAsTouched();
    return;
  }
  // this.formGroup.reset();
  const save: any = {
    nomCapaciatacion:name.nomCapaciatacion,
    modulos:name.modulos,
    sesiones:name.sesiones,
    materiales:name.materiales,
    capaFecha:name.capaFecha,
    capaFechafin:name.capaFechafin
  };
  this.capacitacionService.add$(save).subscribe(response => {
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
    idCapacitacion:this.idCapacitacion,
    nomCapaciatacion:name.nomCapaciatacion,
    modulos:name.modulos,
    sesiones:name.sesiones,
    materiales:name.materiales,
    capaFecha:name.capaFecha,
    capaFechafin:name.capaFechafin,

  }
  this.capacitacionService.update$(this.idCapacitacion, save).subscribe(response => {
    if (response.success) {
      this.activeModal.close({ success: true, message: response.message });
    } else {
    }
  }, () => { }, () => {  });
}

updateData(): any {
  const data = this.item;
  this.isUpdating = true;
  this.idCapacitacion = data.idCapacitacion;
  this.formGroup.patchValue({
    nomCapaciatacion: data.nomCapaciatacion,
    modulos: data.modulos,
    sesiones: data.sesiones,
    materiales: data.materiales,
    capaFecha: data.capaFecha,
    capaFechafin: data.capaFechafin

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
