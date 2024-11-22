import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrainerService } from '../trainer.services';
import { Trainer } from '../Trainer';

@Component({
  selector: 'app-trainer-detail',
  templateUrl: './trainer-detail.component.html',
  styleUrls: ['./trainer-detail.component.css'],
})
export class TrainerDetailComponent implements OnInit {
  trainerDetail: Trainer | null = null;

  constructor(
    private route: ActivatedRoute,
    private trainerServices: TrainerService
  ) {}

  ngOnInit(): void {
    const trainerId = Number(this.route.snapshot.paramMap.get('id'));
    if (trainerId) {
      this.loadTrainerDetails(trainerId);
    }
  }

  private loadTrainerDetails(id: number): void {
    this.trainerServices.getTrainerDetails(id).subscribe(
      (data) => {
        this.trainerDetail = data;
      },
      (error) => {
        console.error('Error al cargar los detalles del entrenador:', error);
      }
    );
  }
}
