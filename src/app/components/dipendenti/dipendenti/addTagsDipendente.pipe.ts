import { PipeTransform, Pipe } from '@angular/core';
import { Tag1 } from '../../../models/tag';

//pipe utilizzata per aggiungere all'oggetto utente i tag a lui associati
@Pipe({ name: 'addtags' })
export class AddTags implements PipeTransform {
  transform(dipendenti, tags: Tag1[]): any {
    dipendenti.forEach(element => {
      //console.log(element)
      element.tags=[]
      tags.forEach((t) => {
         if (t.ID_dipendente == element.ID){
          //console.log(t)
          element.tags.push(t.nome)
        }
      })
    });


  }
}
