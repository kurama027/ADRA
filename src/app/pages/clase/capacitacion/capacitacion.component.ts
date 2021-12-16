import { Component, OnInit } from '@angular/core';
import { CapacitacionService } from 'src/app/providers/services/capacitacion.service';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormComponent } from './form/form.component';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { HttpEventType, HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-capacitacion',
  templateUrl: './capacitacion.component.html',
  styleUrls: ['./capacitacion.component.css']
})
export class CapacitacionComponent implements OnInit {

    //Lista de archivos seleccionados
    selectedFiles: FileList;
    //Es el array que contiene los items para mostrar el progreso de subida de cada archivo
    progressInfo = []
    //Mensaje que almacena la respuesta de las Apis
    message = '';
    //Nombre del archivo para usarlo posteriormente en la vista html
    fileName = "";

    imageName = "";

    fileInfos: Observable<any>;

  capacitaciones: any[] = [];

  constructor(private capacitacionService: CapacitacionService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getCapacitaciones();
    this.fileInfos = this.capacitacionService.getFiles();
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

  selectFiles(event) {
    this.progressInfo = [];
    //Validación para obtener el nombre del archivo si es uno solo
    //En caso de que sea >1 asigna a fileName length
    event.target.files.length == 1 ? this.fileName = event.target.files[0].name : this.fileName = event.target.files.length + " archivos";
    this.selectedFiles = event.target.files;
  }

  upload(index, file) {
    this.progressInfo[index] = { value: 0, fileName: file.name };

    this.capacitacionService.upload(file).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progressInfo[index].value = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.fileInfos = this.capacitacionService.getFiles();
        }
      },
      err => {
        this.progressInfo[index].value = 0;
        this.message = 'No se puede subir el archivo ' + file.name;
      });
  }


  uploadFiles() {
    this.message = '';
    for (let i = 0; i < this.selectedFiles.length; i++) {
      this.upload(i, this.selectedFiles[i]);
    }
  }

  deleteFile(filename: string) {
    this.capacitacionService.deleteFile(filename).subscribe(res => {
      this.message = res['message'];
      this.fileInfos = this.capacitacionService.getFiles();
    });
  }



}
