import { Component, OnInit } from '@angular/core';
import { CapacitacionService } from 'src/app/providers/services/capacitacion.service';


@Component({
  selector: 'app-lisc',
  templateUrl: './lisc.component.html',
  styleUrls: ['./lisc.component.css']
})
export class LiscComponent implements OnInit {

  capacitaciones: any[] = [];

  constructor(private capacitacionService: CapacitacionService) { }

  ngOnInit(): void {
    this.getCapacitaciones();
  }

  getCapacitaciones():void {
    this.capacitacionService.getAll$().subscribe(response => {
      console.log(response);
      this.capacitaciones = response.data || [];
    });
  }


}