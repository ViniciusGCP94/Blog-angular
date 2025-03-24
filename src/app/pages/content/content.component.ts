import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-content',
  imports: [RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit{

  @Input()
  contentCover: string = 'https://i.imgur.com/IbuJRgN.jpeg'

  @Input()
  contentTitle: string ='Titulo do conteúdo'

  @Input()
  contentText: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eos quas iure quaerat, quibusdam, autem neque quam debitis porro at atque vitae necessitatibus, id dolor. Et autem voluptatibus eaque quam?'

  constructor(
    private route:ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value => console.log(value.get("id")))
  }
}
