import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  mark:string="";
  marketOthers:string="";
  constructor() { }

  ngOnInit(): void {
  }
   market(){
    if(this.mark==="market"){
      this.mark="";
    }else{
      this.mark="market";
    }
  }
  marketOthersMethod(){
    if(this.marketOthers==="market"){
      this.marketOthers="";
    }else{
      this.marketOthers="market";
    }
  }

}
