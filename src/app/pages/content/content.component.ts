import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dadosFake} from '../../data/dadosFakes'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  imagem:string = "";
  @Input()
  titulo:string = "";
  @Input()
  descricao:string = "";
  private id:string | null = ""

  constructor(
    private route: ActivatedRoute,
  ) { 
    
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => this.id = value.get("id"));
    this.setValorParaComponente(this.id)
  }

  setValorParaComponente(id: string | null){
    const resultado = dadosFake.filter(artigo => artigo.id == id)[0];

    this.titulo = resultado.titulo
    this.imagem = resultado.foto
    this.descricao = resultado.descricao
    this.id = resultado.id
  }
}
