import { Component, OnInit,Input ,Output,EventEmitter} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() customer;
  @Output() fireCall = new EventEmitter();
  helloInt = 'Home Work Start';
  details = {
    "name":"Amit",
    "age": 20
  }
  checkAlert(details){
    console.log(details);

  }
  Call(e){
    this.fireCall.emit(e);
  }

  constructor() {}

  ngOnInit() {
  }

}
