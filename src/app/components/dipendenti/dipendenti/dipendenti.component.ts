import { Component, OnInit, ViewChild } from '@angular/core';
import { UtentiService } from '../../../services/utenti.service'
import { Utente } from '../../../models/utente'
import { Subject } from 'rxjs';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { TagsService } from '../../../services/tags.service'
import { Tag1 } from '../../../models/tag';
import { AddTags } from './addTagsDipendente.pipe'
import { AuthService } from '../../../services/auth.service';


/**
 * 
 *    Componente che visualizza una tabella contentente tutti i dipendenti.
 *    è presente la possibilità di ricerca in base ai dettagli ed ai tag associati
 *    Inoltre in basso vengono visualizzati tutti i tag con la quale è possibile 
 *    filtrare i dipendenti 
 * 
 */



@Component({
  selector: 'app-dipendenti',
  templateUrl: './dipendenti.component.html',
  styleUrls: ['./dipendenti.component.css'],
  providers: [ AddTags]

})
export class DipendentiComponent implements OnInit {
  dipendenti: Utente[]
  tags: Tag1[]
  allTags : Set<String>
  query: String = ''
  displayedColumns: String[] = ['ID', 'nome', 'cognome', 'email', 'Details'];
  dataSource: MatTableDataSource<Utente>;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private utentiservice: UtentiService,private authservice: AuthService, private tagsservice: TagsService,private addTagsPipe: AddTags) {
    this.allTags= new Set<String>();
    this.dipendenti = new Array<Utente>();
  
  }

  ngOnInit() {
    this.authservice.isLogged()
    this.getTagsDipendenti();
    this.getDipendenti();

  }


  applyFilter(filterValue: string) {
    //console.log(filterValue)
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  //preleva le informazioni dei dipendenti dal database
  getDipendenti() {
    this.utentiservice.getUtenti().subscribe((data) => {
      this.dipendenti = data['dipendenti'];
      console.log(data['success'])
      console.log(data)
      console.log(data['dipendenti'])
      this.addTagsPipe.transform(this.dipendenti, this.tags)
      this.dataSource = new MatTableDataSource<Utente>(this.dipendenti)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort
      //this.dataSource.sort = this.sort;
    })

  }

  //preleva le infomazioni dei tag asssociati dipendenti dal db
  getTagsDipendenti() {
    this.tagsservice.getTagsDipendenti().subscribe((data) => {
      this.tags = data['tags'];
      this.allTags = new Set(this.tags.map((t) => { return t.nome}))
      console.log(this.tags)
      console.log(this.allTags)
      console.log(data['success'])
      console.log(data)
    });
  }

  //filtra gli utenti in base alla presenza o meno dei tag a loro associati
  changeQuery(tag){
    this.query=tag
    this.applyFilter(tag)
  }
}
