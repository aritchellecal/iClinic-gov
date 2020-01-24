import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { EnqueueService } from './../services/enqueue.service';
import * as ModelInterface from '../models';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss']
})
export class QueueComponent implements OnInit {

  public enqueue: ModelInterface.Enqueue[];
  public err: string;
  public queueList: [];
  constructor(private queue: EnqueueService) { }

  movies = [
    'Phantom Menace',
    'Attack of the Clones',
    'Revenge of the Sith',
    'A New Hope'
  ];

  onDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }

  ngOnInit() {
    this.todaysEnqueue();
  }

  todaysEnqueue() {
    this.queue.getTodaysQue()
    .subscribe(
      enq => this.enqueue = enq,
      error => this.err = (JSON.stringify(error))
    );
  }



}
