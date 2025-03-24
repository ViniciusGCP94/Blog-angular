import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-big-card',
  imports: [RouterLink],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent implements OnInit{

  @Input()
  photoCover: string = "";

  @Input()
  titleCard: string = "";

  @Input()
  descriptionCard: string = "";

  @Input()
  Id: string = '0'

  constructor(){

  }

  ngOnInit(): void {

  }
}
