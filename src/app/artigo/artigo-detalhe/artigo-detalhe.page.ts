import { ArtigoService } from './../artigo.service';
import { Component, OnInit } from '@angular/core';
import { Artigo } from 'src/app/model/artigo';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-artigo-detalhe',
  templateUrl: './artigo-detalhe.page.html',
  styleUrls: ['./artigo-detalhe.page.scss'],
})
export class ArtigoDetalhePage implements OnInit {
artigo: Artigo = new Artigo();

  constructor(private serviceArtigo: ArtigoService,
              private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = this.activateRoute.snapshot.paramMap.get('id');
    if (id){
      this.artigo = this.serviceArtigo.getById(parseInt(id));
    }
  }

}
