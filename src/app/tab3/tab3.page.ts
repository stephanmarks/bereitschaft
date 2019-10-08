import { DataService } from './../services/data.service';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  sparten: Array<any>;
  sparte: any;
  searchTerm: any = '';

  constructor(
    // private router: Router,
    private dataService: DataService) {}

  ngOnInit() {
    this.setFilteredSparten();
  }

  setFilteredSparten() {
    this.sparten = this.dataService.filterSparten(this.searchTerm);
  }

  onReorderSparte(event) {
    this.dataService.reorderSparte(event);
  }

  updateSparte(sparte) {
    this.dataService.updateSparte(sparte);
  }}
