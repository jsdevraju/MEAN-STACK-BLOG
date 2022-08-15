import { Component, Input, OnInit } from '@angular/core';
import { BlogsEntity1 } from 'src/app/types';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
})
export class BlogCardComponent implements OnInit {

  @Input () blog: BlogsEntity1 | undefined;
  @Input () categoryName?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
