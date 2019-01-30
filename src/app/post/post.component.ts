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
  constructor(private route: ActivatedRoute, private router: Router, private categoryService: CategoryService) { }

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
    this.route.params.forEach((urlParameters) => {
      this.clickedCategory = parseInt(urlParameters['id']);
    });

  }
  goToDetail(clickedCategory: Category) {
    this.router.navigate(['categories', clickedCategory.id]);
  }


}
