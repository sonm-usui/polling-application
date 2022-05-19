import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-listing',
  templateUrl: './category-listing.component.html',
  styleUrls: ['./category-listing.component.scss']
})
export class CategoryListingComponent implements OnInit {

   isHeroPoll: boolean = true;
  constructor(private route: Router) { }

  ngOnInit(): void {
    this.isHeroPoll = this.route.url.includes('hero');
  }

}
