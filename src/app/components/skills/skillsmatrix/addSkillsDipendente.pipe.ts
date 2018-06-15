import { PipeTransform, Pipe } from '@angular/core';
import { Skill } from '../../../models/skill';

//pipe utilizzata per aggiungere all'oggetto utente le sue skills
@Pipe({ name: 'addskills' })
export class AddSkills implements PipeTransform {
  transform(dipendenti): any {
    dipendenti.forEach(element => {
      //console.log(element)
      element.skillsFilter = []
      console.log(element)
       for(var s in element.skills) {
        element.skillsFilter.push(s)
      };
    });
  };
}
