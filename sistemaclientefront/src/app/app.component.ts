import { Component } from '@angular/core';
import { faUserPen } from '@fortawesome/free-solid-svg-icons';
import { faBinoculars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sistemaclientefront';
  iconecadastro = faUserPen;
  iconeconsulta = faBinoculars;
}

