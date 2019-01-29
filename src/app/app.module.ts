import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';


import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryItemsComponent } from './category-items/category-items.component';
import { PostComponent } from './post/post.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    CategoryItemsComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    // HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
