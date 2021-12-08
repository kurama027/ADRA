import { Component, OnInit } from '@angular/core';
import { CapacitacionService } from 'src/app/providers/services/capacitacion.service';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormComponent } from './form/form.component';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-capacitacion',
  templateUrl: './capacitacion.component.html',
  styleUrls: ['./capacitacion.component.css']
})
export class CapacitacionComponent implements OnInit {

  capacitaciones: any[] = [];

  constructor(private capacitacionService: CapacitacionService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getCapacitaciones();
  }

  getCapacitaciones():void {
    this.capacitacionService.getAll$().subscribe(response => {
      console.log(response);
      this.capacitaciones = response.data || [];
    });
  }

  openModal(): any {
    const modal = this.modalService.open(FormComponent, {
      size: 'lg',
      keyboard: false,
      backdrop: 'static'
    });
    // modal.componentInstance.arreglo = item;
    modal.componentInstance.title = 'Nueva';
    modal.result.then(res => {
      if (res.success) {
        // @ts-ignore
        Swal.fire({
          title: 'Capacitacion',
          text: `${res.message}`,
          icon: 'success',
          confirmButtonColor: '#7f264a',
          timer: 1500
        });
        this.getCapacitaciones();
      }
    }).catch(res => {
    });
  }

  openModalEdit(item: any): any {
    const modal = this.modalService.open(FormComponent, {
      size: 'lg',
      keyboard: false,
      backdrop: 'static'
    });
    modal.componentInstance.idCapacitacion = item.idCapacitacion;
    modal.componentInstance.item = item;
    modal.componentInstance.title = 'Modificar';
    modal.result.then(res => {
      if (res.success) {
        this.getCapacitaciones();
        //swal.fire('Especie',`${res.message}`, 'success')
        Swal.fire({
          title: 'Capacitacion',
          text: `${res.message}`,
          icon: 'success',
          confirmButtonColor: '#7f264a',
          timer: 1500
        });
      }
    }).catch(res => {
    });
  }

  public onDelete(item: any): void {
    const ID = item.idCapacitacion;
    const mensaje = '¿ Desea eliminar? : ' + ' ' + item.nomCapaciatacion;
    if (ID) {
      Swal.fire({
        title: 'Se eliminará el registro',
        text: `${mensaje}`,
        backdrop: true,
        //animation: true,
        showCloseButton: true,
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonColor: '#7f264a',
        confirmButtonText: 'Estoy de acuerdo!',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.value) {
          this.capacitacionService.delete$(ID).subscribe(data => {
            if (data.success) {
              Swal.fire({
                title: 'Eliminado',
                text: data.message,
                backdrop: true,
                //animation: true,
                showConfirmButton: false,
                confirmButtonColor: '#7f264a',
                timer: 1500,
              });
              this.getCapacitaciones();
            }
          });
        }
      });
    }
  }

}
