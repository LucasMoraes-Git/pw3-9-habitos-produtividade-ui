import { Component, OnInit, signal } from '@angular/core';
import { HabitoService } from '../../services/habito-service';
import { Habito } from '../../models/habito';

@Component({
  selector: 'app-lista-habitos',
  imports: [],
  templateUrl: './lista-habitos.html',
  styleUrl: './lista-habitos.css'
})
export class ListaHabitos implements OnInit {
  habitos = signal<Habito[]>([]);

  constructor(private service: HabitoService) {}

  ngOnInit() {
    this.carregar();
  }

  carregar() {
    this.service.listar().subscribe(dados => this.habitos.set(dados));
  }

  fazerCheckin(id: number) {
    this.service.checkin(id).subscribe(() => this.carregar());
  }

  excluir(id: number) {
    if (confirm('Deseja excluir esse hábito?')) {
      this.service.excluir(id).subscribe(() => this.carregar());
    }
  }
}