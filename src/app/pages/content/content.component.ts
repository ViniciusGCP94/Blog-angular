import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import {dataFake} from '../../data/dataFake';

@Component({
  selector: 'app-content',
  imports: [RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit{

  @Input()
  contentCover: string = ''

  @Input()
  contentTitle: string =''

  @Input()
  contentText: string = ''

  private id : string | null = '0'

  constructor(
    private route:ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    // função abaixo: Para saber quais parâmetros a noticia está retornando
    // this.route.paramMap.subscribe( value => console.log(value.get("id")))

    this.route.paramMap.subscribe( value => this.id = value.get('id'))
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent (id:string | null) {
    const result = dataFake.filter (article => article.id.toString() == id)[0]

    this.contentTitle = result.title
    this.contentCover = result.cover
    this.contentText = result.text
  }
}
