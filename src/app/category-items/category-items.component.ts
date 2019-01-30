import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { CategoriesComponent } from '../categories/categories.component';
import { ActivatedRoute, Params } from '@angular/router';
import { CATEGORIES } from '../mock-categories';
import { BIKES, CARS } from '../mock-posts';  //Bob changed This
import { CategoryService } from '../category.service'
import { Router } from '@angular/router';
import { Category } from '../category.model'; //Bob added this.

@Component({
  selector: 'app-category-items',
  templateUrl: './category-items.component.html',
  styleUrls: ['./category-items.component.css']
})
export class CategoryItemsComponent implements OnInit {
clickedItem;
categories=CATEGORIES;  //This is a Category object
bikes = BIKES;  //This is a Post object
cars = CARS;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.route.params.forEach((urlParameters) => {
      this.clickedItem = parseInt(urlParameters['id']);
    });





}
}
