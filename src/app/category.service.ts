import { Injectable } from '@angular/core';
import { BIKES, CARS } from './mock-posts';
import { Post } from './post.model';
import { Category } from './category.model';
import { CATEGORIES } from './mock-categories';
import { Router } from '@angular/router';
import {CategoriesComponent} from './categories/categories.component'

@Injectable()
export class CategoryService {

  constructor() { }

  getCategories(){
    return CATEGORIES;
  }
  getCars(){
    return CARS;
  }
  getBikes(){
    return BIKES;
  }

  // selectedCategory(clickedCategory) {
  //   clickedCategory = this.selectedCategory
  //   this.selectedCategory = true;
  // }



}
