import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  titles = [
    {name: 'Wife', description: 'I make sweet love to my amazing husband that made me this website'},
    {name: 'Mother', description:
     'A biproduct of all of the love making, they are the joy of my life and my kids are much cooler than your kids #momshameing!'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
