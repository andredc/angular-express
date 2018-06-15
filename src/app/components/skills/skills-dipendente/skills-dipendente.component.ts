import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Skill } from '../../../models/skill';
import { SkillsService } from '../../../services/skills.service';



/**
 * 
 *    componente che visualizza le skills di un dipendente
 * 
 */

@Component({
  selector: 'app-skills-dipendente',
  templateUrl: './skills-dipendente.component.html',
  styleUrls: ['./skills-dipendente.component.css']
})
export class SkillsDipendenteComponent implements OnInit {
  skills: Skill[]
  idDipendente: number;
  myPage:boolean
  constructor(private skillsservice: SkillsService, private route: ActivatedRoute) {
    this.getSkillsDipendente()
    this.myPage= false
    this.checkIdentity()
  }

  ngOnInit() {
  }

  //preleva tutte le skills presenti nel database
  getSkillsDipendente() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.idDipendente = id;
    this.skillsservice.getSkillsDipendente(id).subscribe((data) => {
      this.skills = data['skills']
      console.log(data)
    })
  }

  //verifica l'identità dell'utente corrente con quello della pagina che si sta visualizzando
  //cosi da modificarne gli elementi della pagina
  checkIdentity(){
    const id = +this.route.snapshot.paramMap.get('id');
   // console.log(JSON.parse(localStorage.getItem('user')).user.ID + "---------" + id)
    if(JSON.parse(localStorage.getItem('user')).user.ID == id || JSON.parse(localStorage.getItem('user')).user.admin==1)
      this.myPage= true
    else this.myPage= false
   // console.log(this.myPage)
  }
}
