import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from '../api.service';
import { Data } from '../models/data';

@Component({
  selector: 'app-card-lists',
  templateUrl: './card-lists.component.html',
  styleUrls: ['./card-lists.component.scss']
})
export class CardListsComponent implements OnInit {
  details: Data[] = [];
  loader: boolean = true;
  // heightBool:boolean=false;
  @Output ('classBool') classBool=new EventEmitter();
  constructor(private apiservice:ApiService) { }

  ngOnInit(): void {
    this.apiservice.getData().subscribe((succe) => {
      console.log(succe);
      this.details = succe.data.children;
      console.log(this.details);
      this.loader = false;
  this.classBool.emit(true);
    })
  }

}
