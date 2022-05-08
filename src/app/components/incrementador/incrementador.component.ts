import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [],
})
export class IncrementadorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

  @Input('valor') progreso = 50;
  @Input() btnClass: string = 'btn-primary';
  @Output('valor') emitValor: EventEmitter<number> = new EventEmitter();
  changeValue(value: number) {
    if (this.progreso >= 100 && value >= 0) {
      this.emitValor.emit(100);
      return (this.progreso = 100);
    }
    if (this.progreso === 0 && value < 0) {
      this.emitValor.emit(0);
      return (this.progreso = 0);
    }
    this.progreso = this.progreso + value;
    this.emitValor.emit(this.progreso);
    return this.progreso;
  }
  onChange(event: number) {
    if (event >= 100) {
      this.progreso = 100;
    } else if (event <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = event;
    }
    this.emitValor.emit(this.progreso);
  }
}
