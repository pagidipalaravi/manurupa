import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() items = new EventEmitter;

  addNewItem(value: string) {
    this.items.emit(value);
  }
}
