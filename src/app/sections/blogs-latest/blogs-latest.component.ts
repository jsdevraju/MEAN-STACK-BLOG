import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { BlogsEntity } from 'src/app/types';

@Component({
  selector: 'app-blogs-latest',
  templateUrl: './blogs-latest.component.html',
})
export class BlogsLatestComponent implements OnInit {
  public blogs: BlogsEntity = {
    _id: '',
    name: '',
    count: 0,
  };
  public loading: boolean = true;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getAllBlogs().subscribe(
      (res: any) => {
        this.blogs = res.blogs[0];
        this.loading = false;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
