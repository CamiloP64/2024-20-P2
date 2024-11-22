import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trainer } from './Trainer';

@Injectable({
  providedIn: 'root',
})
export class TrainerService {
  private baseUrl = 'https://raw.githubusercontent.com/2603-Uniandes/jsons/refs/heads/main/2024-20%20Pokemon';

  constructor(private http: HttpClient) {}

  // Obtener todos los entrenadores
  getAllTrainers(): Observable<Trainer[]> {
    return this.http.get<Trainer[]>(`${this.baseUrl}/trainers.json`);
  }

  // Obtener los detalles de un entrenador por ID
  getTrainerDetails(trainerId: number): Observable<Trainer> {
    return this.http.get<Trainer>(`${this.baseUrl}/${trainerId}/trainers.json`);
  }
}
