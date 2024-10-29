import { Component, OnChanges, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges {

  @Input() nome: string = ''

  constructor() {
    console.log("Construtor")
   }
  ngOnChanges(): void {
  console.log("OnChanges")
  }

  ngOnInit(): void {
    console.log("OnInit")
  }

}
