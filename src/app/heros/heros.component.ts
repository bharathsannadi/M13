import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})


export class HerosComponent implements OnInit {

  constructor() { }
  
  hero = "ram";


  ngOnInit() {
  }

  @Input()
  get gethero(){
    return this.hero;
  }

  @Input()
  set sethero(val){
    this.hero = val;
  }

}
