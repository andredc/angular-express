import { Component, OnInit } from '@angular/core';
import { Skill } from '../../../models/skill';
import { SkillsService } from '../../../services/skills.service';
import { ActivatedRoute } from '@angular/router';
import {SnackService} from '../../../services/snack.service'
import {FormControl} from '@angular/forms';



/**
 *    componente che permette di gestire l'aggiunta delle skills
 *    di un dipendete
 */


@Component({
  selector: 'app-add-skill-dipendente',
  templateUrl: './add-skill-dipendente.component.html',
  styleUrls: ['./add-skill-dipendente.component.css']
})
export class AddSkillDipendenteComponent implements OnInit {
  skill: Skill
  skills: Skill[]
  selectedIdSkill: Number
  scadenza: FormControl

  constructor(private skillsservice:SkillsService,private route: ActivatedRoute,private snackservice:SnackService) { 
    this.scadenza = new FormControl(new Date());
    this.skill= new Skill;
    this.getSkills();
  }

  ngOnInit() {
  }

  //aggiunge una skill ad un dipendete
  addSkillDipendente(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.skill.ID = this.selectedIdSkill
    this.skill.ID_dipendente = id;
    this.skill.scadenza = this.scadenza.value
    //console.log(this.skill.scadenza)
    //console.log('id dipendente: '+ id)
    this.skillsservice.addSkillsDipendente(this.skill,id).subscribe((data) => {
      console.log(data);
      this.snackservice.snackAndRouting('Aggiunta Skill','Errore',data['status'],'dipendenti')
    })
  }

  //preleva tutte le skill presente nel db
  getSkills(){
    this.skillsservice.getSkills().subscribe((data) => {
      this.skills=data['skills']
      console.log(data);
    })
  }
}
