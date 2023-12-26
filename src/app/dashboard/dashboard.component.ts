import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { DashboardChildComponent } from './components/dashboard-child/dashboard-child.component';

@Component({
  selector: 'app-dashboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, DashboardChildComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  text = 'Dashboard Component text inicial';
  constructor(cd: ChangeDetectorRef) {
    setTimeout(() => {
      // a menos que se una interacción de usuario
      // de esta maneja controlamos la detección de cambios
      this.text = 'Dashboard Component actualizado desde el time out';
      cd.detectChanges();// indicamos que se debe ejecutar la detección de cambios
    }, 5000);
  }
  handleClick() {
    this.text = 'Dashboard Component actualizado desde el parent';
  }
}
