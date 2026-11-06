import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Habito, HabitoRequest } from '../models/habito';

@Injectable({ providedIn: 'root' })
export class HabitoService {
  private api = 'http://localhost:8080/api/habitos';

  constructor(private http: HttpClient) {}

  listar()                             { return this.http.get<Habito[]>(this.api); }
  buscar(id: number)                   { return this.http.get<Habito>(`${this.api}/${id}`); }
  criar(h: HabitoRequest)              { return this.http.post<Habito>(this.api, h); }
  editar(id: number, h: HabitoRequest) { return this.http.put<Habito>(`${this.api}/${id}`, h); }
  excluir(id: number)                  { return this.http.delete<Habito>(`${this.api}/${id}`); }
  checkin(id: number)                  { return this.http.post<Habito>(`${this.api}/${id}/checkin`, {}); }
}