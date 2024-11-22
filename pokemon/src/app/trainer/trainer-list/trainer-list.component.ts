import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainerService } from '../trainer.services';
import { Trainer } from '../Trainer';

@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrls: ['./trainer-list.component.css'],
})
export class TrainerListComponent implements OnInit {
  trainers: Trainer[] = [];

  constructor(private trainerService: TrainerService, private router: Router) {}

  ngOnInit(): void {
    this.loadTrainers();
  }

  loadTrainers(): void {
    this.trainerService.getAllTrainers().subscribe(
      (data) => {
        this.trainers = data;
      },
      (error) => {
        console.error('Error al cargar entrenadores:', error);
      }
    );
  }

  navigateToDetail(trainerId: number): void {
    this.router.navigate(['/trainers', trainerId]);
  }
}
