import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-polling-homepage',
  templateUrl: './polling-homepage.component.html',
  styleUrls: ['./polling-homepage.component.scss']
})
export class PollingHomepageComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  console.log(document.getElementById('video'));
  }

}
