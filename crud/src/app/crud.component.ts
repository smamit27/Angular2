import { Component } from '@angular/core';
import { HomeComponent } from './home/index';



@Component({
  moduleId: module.id,
  selector: 'crud-app',
  templateUrl: 'crud.component.html',
  styleUrls: ['crud.component.css'],
  directives: [HomeComponent]
})
export class CrudAppComponent {
  title = 'crud works!';
  name = 'Crud Operation Start';
}
