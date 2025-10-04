import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../models/empleado';

@Injectable({ providedIn: 'root' })
export class EmpleadoService {
  private readonly URL_API = 'http://localhost:3005/api/empleados';

  // estado simple en memoria, igual al de la guía
  empleados: Empleado[] = [];
  selectedEmpleado: Empleado = { nombre: '', cargo: '', departamento: '', sueldo: 0 };

  constructor(private http: HttpClient) {}

  getEmpleados() {
    return this.http.get<Empleado[]>(this.URL_API);
  }

  createEmpleado(empleado: Empleado) {
    return this.http.post(this.URL_API, empleado);
  }

  // extra (útiles si luego haces todo el CRUD)
  getEmpleado(id: string) { return this.http.get<Empleado>(`${this.URL_API}/${id}`); }
  updateEmpleado(id: string, body: Partial<Empleado>) { return this.http.put(`${this.URL_API}/${id}`, body); }
  deleteEmpleado(id: string) { return this.http.delete(`${this.URL_API}/${id}`); }
}