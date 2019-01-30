import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { Category } from '../category.model';
import { CATEGORIES } from '../mock-categories';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent implements OnInit {

  categories = CATEGORIES;

  selectedCategory = null;
  goToDetail(clickedCategory: Category) {
    this.router.navigate(['categories', clickedCategory.id]);
    this.selectedCategory = clickedCategory.id;
  }


  // chooseCategory(clickedCategory: Category){
  // }

  constructor(private router: Router) {}

  ngOnInit() {

  }

}
