import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatAccordion, MatSort } from '@angular/material';
import { Skill } from '../../../models/skill';
import { SkillsService } from '../../../services/skills.service';
import { AddSkills } from './addSkillsDipendente.pipe'

/**
 *    Componente che visualizza tutte l skill di tutti i dipendenti
 *    è presente la data di scadenza della skill ed in base alla validità
 *    sarà colorata in un certo modo.
 *    I dipendenti possono anche essere filtrati per skill
 */


@Component({
  selector: 'app-skillsmatrix',
  templateUrl: './skillsmatrix.component.html',
  styleUrls: ['./skillsmatrix.component.css'],
  providers: [ AddSkills]

})
export class SkillsmatrixComponent implements OnInit {

  skills: Skill[]
  skillsFilter: Skill[]
  displayedColumns: String[];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private skillsservice: SkillsService,private addskillspipe : AddSkills) {
    this.skills = new Array<Skill>()
   
  }

  applyFilter(filterValue: string) {
    //console.log(filterValue)
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>();
    this.getSkills();
    this.getSkillsDipendenti()
    //this.dataSource.filterPredicate = (data: any, filter: string) => data.skills.indexOf(filter) != -1;
  }

  //preleva le informazioni di tutte le skill di defaul presenti sul db
  getSkills() {
    this.skillsservice.getSkills().subscribe((data) => {
      this.skills = data['skills']
      this.displayedColumns = ['ID', 'Dipendente'];
      this.skills.forEach((s) => { this.displayedColumns.push(s.nome) })
      console.log(data);
    })
  }

  //preleva le informazioni sule skill dei dipendenti
  getSkillsDipendenti() {
    //dataSource = new MatTableDataSource(Skills Dipendenti!!!!)
    this.skillsservice.getSkillsDipendenti().subscribe((data) => {
      // this.dataSource = data['skills']
      console.log(data['skills'])
      var skillDip = this.addskillspipe.transform(data['skills'])
      this.dataSource = new MatTableDataSource(data['skills'])
    })
  }

  //verifica se una skill è scaduta o meno ed applica uno stile di conseguenza.
  isValid(scadenza: string) {
    var now: Date = new Date();
    //console.log(scadenza)
    //console.log(now)
    var nowDate = (now.getMonth() + 1) + '-' + now.getDate() + '-' + now.getFullYear()
    //console.log(nowDate)
    var d1 = Date.parse(nowDate);
    var d2 = Date.parse(scadenza);
    //console.log(d1)
    //console.log(d2)
    var result: boolean
    if (d2 <= d1) result = false
    else result = true
    let styles = {
      'color': result ? 'green' : 'red'
    };
    return styles;
  }
}
