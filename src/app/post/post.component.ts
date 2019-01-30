import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { CategoriesComponent } from '../categories/categories.component';
import { ActivatedRoute, Params } from '@angular/router';
import { CATEGORIES } from '../mock-categories';
import { BIKES, CARS } from '../mock-posts';  //Bob changed This
import { CategoryService } from '../category.service'
import { Router } from '@angular/router';
import { Category } from '../category.model';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [CategoryService]
})
export class PostComponent implements OnInit {
categories=CATEGORIES;  //This is a Category object
bikes = BIKES;  //This is a Post object
cars = CARS;  //This is a Post object
clickedCategory;
clickedItem;
  constructor(private route: ActivatedRoute, private router: Router, private categoryService: CategoryService) { }

  ngOnInit() {
    // this.categories = this.categoryService.getCategories();
    this.route.params.forEach((urlParameters) => {
      this.clickedCategory = parseInt(urlParameters['id']);

    });

  }

  goToItem(clickedItem: Post) {
    this.router.navigate(['category-items', clickedItem.id]);
  }


}
