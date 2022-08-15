import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { BlogsEntity1, Category } from 'src/app/types';

@Component({
  selector: 'app-categories-blog',
  templateUrl: './categories-blog.component.html',
})
export class CategoriesBlogComponent implements OnInit {
  public newCategory: Category = {
    _id: '',
    name: '',
    __v: 0,
  };
  public blogs: BlogsEntity1[] = [];
  public limit:number = 6;
  public count:number = 0;
  public page:number = 1;
  public loading: boolean = true;

  constructor(private api: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.api.getCategories().subscribe((res: any) => {
      const newCategories = res.categories.find(
        (item: any) =>
          item.name === this.route.snapshot.paramMap.get('categories')
      );
      this.newCategory = newCategories;
      // All Categories Blog Based on user filter
      this.api
        .getCategoriesBlog(`${newCategories._id}`)
        .subscribe((res: any) => {
          this.blogs = res.blogs;
          this.loading = false;
          console.log(res);
        });
    });
  }
}
