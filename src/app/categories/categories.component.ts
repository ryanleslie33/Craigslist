import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor() { }
 posts: Post[]= [
    new Post ("bikes", "huffy","6 speed"),
    new Post ("cars", "pinto","6 speed"),

  ]
  ngOnInit() {
  }

}
