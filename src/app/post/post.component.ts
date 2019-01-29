import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { CATEGORIES } from '../mock-categories';
import { BIKES , CARS } from '../mock-posts';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
bikes = BIKES
cars = CARS
  constructor() { }

  ngOnInit() {
  }

}
