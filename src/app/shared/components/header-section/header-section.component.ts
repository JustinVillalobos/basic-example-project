import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.scss']
})
export class HeaderSectionComponent implements OnInit {
  @Input() title :string;
  constructor() { }

  ngOnInit(): void {
  }

}
