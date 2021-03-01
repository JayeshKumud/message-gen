import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  IGetPortfolio,
  ISender,
  ITarget,
} from 'src/app/shared/interfaces/portfolio-interface';

@Component({
  selector: 'app-get-portfolio',
  templateUrl: './get-portfolio.component.html',
  styleUrls: ['./get-portfolio.component.css'],
})
export class GetPortfolioComponent implements OnInit {
  getPortfolio!: IGetPortfolio;
  target!: ITarget;
  sender!: ISender;
  //getProfileForm = new FormGroup();

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {}
}
