import { Component, OnInit } from '@angular/core';
import { CapacitacionService } from 'src/app/providers/services/capacitacion.service';
import { SeminarioService } from 'src/app/providers/services/seminario.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  capacitaciones: any[] = [];
  seminario: any[] = [];

  constructor(private capacitacionService: CapacitacionService,
    private seminarioService: SeminarioService) { }

  ngOnInit(): void {
    this.getCapacitaciones();
    this.getSeminario();
  }

  getCapacitaciones():void {
    this.capacitacionService.getAll$().subscribe(response => {
      console.log(response);
      this.capacitaciones = response.data || [];
    });
  }

  getSeminario(): void {
    this.seminarioService.getAll$().subscribe(response => {
      console.log(response);
      this.seminario = response.data || [];
    });
  }
}
