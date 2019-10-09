import { Router } from '@angular/router';
import { DataService } from './../services/data.service';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit  {

  bereitschaften: Array<any>;
  bereitschaftsDates: Array<any>;

  constructor(private dataService: DataService, private router: Router) {}


  ngOnInit(): void {
    this.bereitschaften = this.dataService.getBereitschaften();
    // Nur das Datum aus Array Bereitschaften in Array myFilter schreiben
    const myFilter = this.bereitschaften.map(filter => filter.date);
    // Nur eindeutige Daten ins Objekt myReduced schreiben
    const myReduced = new Set(myFilter);
    // Neues Array aus dem Objekt myReduced erzeugen
    this.bereitschaftsDates = [...myReduced];
  }




}
