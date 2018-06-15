import { Component, OnInit } from '@angular/core';
import { Skill } from '../../../models/skill';
import { SkillsService } from '../../../services/skills.service';
import { SnackService } from '../../../services/snack.service';


/**
 *    componente che permette di gestire l'aggiunta e/o rimozione delle skill
 * 
 */



@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {

  skills: Skill[]
  nomeSkill: String

  constructor(private skillsservice: SkillsService, private snackservice: SnackService) {
    this.nomeSkill = ''
    this.getSkills()

  }


  ngOnInit() {
  }

  //preleva tutte le skills presenti nel database
  getSkills() {
    this.skillsservice.getSkills().subscribe((data) => {
      this.skills = data['skills']//.map((s) => { return s.nome })
      console.log(this.skills)
    })
  }

  //aggiunge una skill a quelle presenti nel database
  addSkill() {
    this.skillsservice.addSkill(this.nomeSkill).subscribe((data) => {
      console.log(data);
      this.nomeSkill = ''
      this.getSkills()
      this.snackservice.snack('Aggiunta Skill', 'Errore', data['status'])
    })
  }

  //cancella una skill da quelle presenti nel database
  deleteSkill(id_tag: number) {
    this.skillsservice.deleteSkill(id_tag).subscribe((data) => {
      console.log(data)
      this.getSkills()
      this.nomeSkill = '';
    })
  }
}
