import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { PostComponent } from './post/post.component';
import {CategoryItemsComponent} from './category-items/category-items.component';
const appRoutes: Routes = [

  {
    path: '',
    component: CategoriesComponent
  },
  // {
  //   path: 'categories/:id',
  //   component: PostComponent
  // },
  // {
  //   path: 'category-items/:id',
  //   component: CategoryItemsComponent
  // }
//Next section added by Bob:
  {
    path: 'categories/:id',
    component: PostComponent
  },
  {
    path: 'category-items/:id',
    children: [
      {
      path: '',
      component: CategoryItemsComponent,
      }
    ]
  }
//Above section added by Bob
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
