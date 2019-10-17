import { Router } from '@angular/router';
import { DataService } from './../services/data.service';
import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  sparten: Array<any>;
  bereitschaften: Array<any>;

  constructor(private dataService: DataService, private router: Router) {}

  reRead() {
    this.getData();
  }

  ngOnInit(): void {
    this.getData();
  }

  openDetail(id): void {
    this.router.navigateByUrl(`details/${id}`);
  }

  dialNumber(number): void {

  }

  getData() {
    this.sparten = this.dataService.getMarkedSparten();
    // ID der markierten Sparten ermitteln
    const myFilter = this.sparten.map(filter => filter.id);
    // Alle Bereitschaften zu den markierten Sparten holen
    // this.bereitschaften = this.dataService.getBereitschaftenBySparte(myFilter);
    this.bereitschaften = this.dataService.getBereitschaftenBySparteDate(myFilter, '2019-08-02T00:00:00.000Z' );
  }

}
