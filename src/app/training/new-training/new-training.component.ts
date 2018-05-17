import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  @Output() trainingStart = new EventEmitter<any>();
  workouts = [
    { value: 'crunches', viewValue: 'Crunches'},
    { value: 'pushups', viewValue: 'Push Ups'},
    { value: 'lunges', viewValue: 'lunges'},
    { value: 'squats', viewValue: 'Squats'},
    { value: 'deadlifts', viewValue: 'Deadlifts'},
    { value: 'bench-press', viewValue: 'Bench Press'},
    { value: 'burpees', viewValue: 'Burpees'},
  ];
  constructor() { }

  ngOnInit() {
  }
  onStartTraining() {
    this.trainingStart.emit();
  }

}
