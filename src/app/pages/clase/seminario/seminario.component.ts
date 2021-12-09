import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SeminarioService } from 'src/app/providers/services/seminario.service';
import Swal from 'sweetalert2';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-seminario',
  templateUrl: './seminario.component.html',
  styleUrls: ['./seminario.component.css']
})
export class SeminarioComponent implements OnInit {

  seminario: any[] = [];
  constructor(private seminarioService: SeminarioService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getSeminario();

  }

  getSeminario(): void {
    this.seminarioService.getAll$().subscribe(response => {
      console.log(response);
      this.seminario = response.data || [];
    });
  }

  openModal(): any {
    const modal = this.modalService.open(FormComponent, {
      size: 'lg',
      keyboard: false,
      backdrop: 'static'
    });
    // modal.componentInstance.arreglo = item;
    modal.componentInstance.title = 'Nuevo';
    modal.result.then(res => {
      if (res.success) {
        // @ts-ignore
        Swal.fire({
          title: 'Seminario',
          text: `${res.message}`,
          icon: 'success',
          confirmButtonColor: '#7f264a',
          timer: 1500
        });
        this.getSeminario();
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
    modal.componentInstance.id_seminario = item.id_seminario;
    modal.componentInstance.item = item;
    modal.componentInstance.title = 'Modificar';
    modal.result.then(res => {
      if (res.success) {
        this.getSeminario();
        //swal.fire('Empleado',`${res.message}`, 'success')
        Swal.fire({
          title: 'Seminario',
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
    const ID = item.idSeminario;
    const mensaje = '¿ Desea eliminar? : ' + ' ' + item.seminario;
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
          this.seminarioService.delete$(ID).subscribe(data => {
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
            this.getSeminario();
            }
          });
        }
      });
    }
  }

}
