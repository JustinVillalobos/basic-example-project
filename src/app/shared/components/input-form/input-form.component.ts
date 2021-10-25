import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {
  @Input() type :string;
  @Input() label :string;
  @Input() placeholder: string;
  @Input() formField: any;
  @Output() letterTyped: EventEmitter<any> = new EventEmitter();
  @Input() isToggle :boolean;
  @Input() width :string;
  @Input() margin_left:string;
   toggle:boolean = false ;
  constructor() {
   }

  ngOnInit(): void {
  }
  updateValue() {
    this.letterTyped.emit(this.formField);
  }
   updateFunc(e) {
    this.toggle = e.checked;
  }
  unCheck(){
    this.toggle = false;
  }

}
