import { Component } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  courses: Course[] = [
    {_id: "1", name: "angular", category: "Front-end"},
    {_id: "2", name: "spring", category: "Back-end"}
  ];

  displayedColumns = ['name', 'category'];
}
