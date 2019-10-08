import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  bereitschaften: Array<any>;
  sparte: Array<any>;
  id = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.bereitschaften = this.dataService.getBereitschaftenBySparte(this.id);
    this.sparte = this.dataService.getSparteById(this.id);
  }

}
