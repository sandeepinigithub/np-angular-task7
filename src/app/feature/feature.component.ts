import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {



  features:any = [
    {
      name:"Optimize Code",
      description : "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit.",
      iconClass: "fas fa-code fa-3x text-danger"

    },
    {
      name:"Optimize Code",
      description : "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit.",
      iconClass: "fas fa-mobile-alt fa-3x text-danger"

    },
    {
      name:"Optimize Code",
      description : "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit.",
      iconClass: "fas fa-question-circle fa-3x text-danger"

    }
  ];

  

  constructor() { }

  ngOnInit(): void {
  }

}
