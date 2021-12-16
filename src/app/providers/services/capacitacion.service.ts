import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {EntityDataService} from "../utils/entity-data.service";
import {END_POINTS} from "../utils/end-points";
import { IResponse } from '../utils/responses';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CapacitacionService  extends EntityDataService<IResponse>{

   //Url obtenida de la variable de enviroments
  baseUrl = environment.baseUrl;

  constructor(protected httpClient: HttpClient) {
    super(httpClient, END_POINTS.api+END_POINTS.admin.capacitacion);
  }

//Metodo que envia los archivos al endpoint /upload
upload(file: File): Observable<HttpEvent<any>>{
  const formData: FormData = new FormData();
  formData.append('files', file);

  const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
    reportProgress: true,
    responseType: 'json'
  });
  return this.httpClient.request(req);
}

//Metodo para Obtener los archivos
getFiles(){
  return this.httpClient.get(`${this.baseUrl}/files`);
}

//Metodo para borrar los archivos
deleteFile(filename: string){
  return this.httpClient.get(`${this.baseUrl}/delete/${filename}`);
}


}
