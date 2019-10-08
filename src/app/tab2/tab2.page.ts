import { Router } from '@angular/router';
import { DataService } from './../services/data.service';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit  {

  sparten: Array<any>;
  bereitschaften: Array<any>;

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {

  }




}
