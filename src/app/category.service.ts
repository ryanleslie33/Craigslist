import { Injectable } from '@angular/core';
import { BIKES, CARS } from './mock-posts';
import { Post } from './post.model';
import { Category } from './category.model';
import { CATEGORIES } from './mock-categories';
import { Router } from '@angular/router';
import {CategoriesComponent} from './categories/categories.component'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class CategoryService {
  cars = CARS
  bikes = BIKES
 categories: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
this.categories = database.list('categories');
  }

  getCategories(){
    return this.categories;
  }
  getCars(){
    return this.cars;
  }
  getBikes(){
    return this.bikes;
  }

  // selectedCategory(clickedCategory) {
  //   clickedCategory = this.selectedCategory
  //   this.selectedCategory = true;
  // }



}
