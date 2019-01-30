import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { CategoriesComponent } from '../categories/categories.component';
import { CATEGORIES } from '../mock-categories';
import { POSTS , CARS } from '../mock-posts';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
posts = POSTS
cars = CARS
  constructor() { }

  ngOnInit() {
  }

}
