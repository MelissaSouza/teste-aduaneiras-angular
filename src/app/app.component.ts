import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true // Adicione esta linha para marcar o componente como independente
})
export class AppComponent {
  title = 'meu-projeto-angular';
}
