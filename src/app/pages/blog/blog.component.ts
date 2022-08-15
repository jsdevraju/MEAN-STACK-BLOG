import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { BlogsEntity } from 'src/app/types';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
})
export class BlogComponent implements OnInit {
  public blogs: BlogsEntity[] = []
  public loading: boolean = true;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getAllBlogs().subscribe(
      (res: any) => {
        this.blogs = res.blogs;
        this.loading = false;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
