import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-page-smart',
  templateUrl: './home-page-smart.component.html',
  styleUrls: ['./home-page-smart.component.css']
})
export class HomePageSmartComponent implements OnInit {

  constructor( private router: Router ) { }


  ngOnInit() {
  }


}
