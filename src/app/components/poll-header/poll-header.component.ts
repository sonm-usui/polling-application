import { Component, OnInit } from '@angular/core';
import { window } from 'rxjs';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-poll-header',
  templateUrl: './poll-header.component.html',
  styleUrls: ['./poll-header.component.scss']
})
export class PollHeaderComponent implements OnInit {
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  setActive(value: string): boolean {
    return  this.route.url === value;
  }
}
