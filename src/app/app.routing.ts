import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { PostComponent } from './post/post.component';
const appRoutes: Routes = [

  {
    path: '',
    component: CategoriesComponent
  },
  {
    path: 'categories/:id',
    component: PostComponent
  }


];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
