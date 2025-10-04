import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmpleadoService } from '../../services/empleado.service';
import { Empleado } from '../../models/empleado';

@Component({
  selector: 'app-empleado',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  constructor(public empleadoService: EmpleadoService) {}

  ngOnInit(): void { this.getEmpleados(); }

  getEmpleados(): void {
    this.empleadoService.getEmpleados().subscribe({
      next: (res) => (this.empleadoService.empleados = res),
      error: (err) => console.error(err),
    });
  }

  addEmpleado(form: NgForm): void {
    this.empleadoService.createEmpleado(form.value as Empleado).subscribe({
      next: () => { this.getEmpleados(); form.resetForm(); },
      error: (err) => console.error(err),
    });
  }

  onDelete(id?: string): void {
    if (!id) return;                 // evita undefined
    this.empleadoService.deleteEmpleado(id).subscribe({
      next: () => this.getEmpleados(),
      error: (err) => console.error(err),
    });
  }
}