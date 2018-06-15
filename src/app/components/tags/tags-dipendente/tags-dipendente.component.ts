import { Component, OnInit } from '@angular/core';
import { Tag1 } from '../../../models/tag';
import { TagsService } from '../../../services/tags.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, Validators, ValidatorFn, FormGroup, AbstractControl } from '@angular/forms';



/**
 *    componente che permette di gestire l'aggiunta e/o rimozione dei tags
 * 
 */


@Component({
  selector: 'app-tags-dipendente',
  templateUrl: './tags-dipendente.component.html',
  styleUrls: ['./tags-dipendente.component.css']
})
export class TagsDipendenteComponent implements OnInit {
  tags: Tag1[];
  tag: Tag1;
  myPage: boolean;
 
  constructor(private tagsservice: TagsService, private route: ActivatedRoute) {
    this.myPage=false;
    this.tag = new Tag1;
    this.tags = new Array<Tag1>()
    this.getTagsDipendente()
    this.checkIdentity()
  }

  ngOnInit() {
  }

  //preleva i tag associati ad un dipendente
  getTagsDipendente() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.tagsservice.getTagsDipendente(id).subscribe((data) => {
      console.log(data)
      this.tags = data['tags']
    })
  }

  //associa un tag ad un dipendete
  addTagDipendente() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.tagsservice.addTagDipendente(this.tag, id).subscribe((data) => {
      console.log(data)
      this.getTagsDipendente()
      this.tag.nome = '';
    })
  }

  //rimuove un tag da un dipendete
  deleteTagDipendente(id_tag: number) {
    const id = +this.route.snapshot.paramMap.get('id');
    this.tagsservice.deleteTagDipendente(id, id_tag).subscribe((data) => {
      console.log(data)
      this.getTagsDipendente()
      this.tag.nome = '';
    })
  }

  //verifica l'identità dell'utente corrente con quello della pagina che si sta visualizzando
  //cosi da modificarne gli elementi della pagina
   checkIdentity(){
   const id = +this.route.snapshot.paramMap.get('id');
  // console.log(JSON.parse(localStorage.getItem('user')).user.ID + "---------" + id)
   if(JSON.parse(localStorage.getItem('user')).user.ID == id)
     this.myPage= true
   else this.myPage= false
  // console.log(this.myPage)
 }
}