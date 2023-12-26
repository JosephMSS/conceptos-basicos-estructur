import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-dashboard-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-child.component.html',
  styleUrl: './dashboard-child.component.scss',
})
export class DashboardChildComponent implements OnInit {
  @Input() text: string = '';
  @Output() textChange = new EventEmitter<string>();
  //se debe inicializar las variables en el constructor o donde se declara, y no en el on Init
  ngOnChanges(changes: SimpleChanges): void {
    console.log('DashboardChildComponent ngOnChanges');
    console.log(changes);
  }
  ngOnInit(): void {
    //llamadas al backend, etc
    console.log('DashboardChildComponent ngOnInit');
  }
  handleClick() {
    this.text = 'DashboardChildComponent actualizado desde el child';
    this.textChange.emit(this.text)
  }
}
