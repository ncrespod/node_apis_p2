import { Component } from '@angular/core';
import { EmpleadoComponent } from './components/empleado/empleado.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EmpleadoComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {}