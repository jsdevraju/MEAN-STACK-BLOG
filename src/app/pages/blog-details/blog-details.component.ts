import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogsEntity1 } from 'src/app/types';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
})
export class BlogDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private api: ApiService) {}
  public loading: boolean = true;
  public blogDetails: any = {} as BlogsEntity1;

  ngOnInit(): void {
    // this.route.snapshot.paramMap.get('id')
    this.api
      .getSingleBlog(`${this.route.snapshot.paramMap.get('id')}`)
      .subscribe(
        (res: any) => {
          this.blogDetails = res.blog;
          this.loading = false;
        },
        (err: any) => {
          console.log(err);
        }
      );
  }
}
