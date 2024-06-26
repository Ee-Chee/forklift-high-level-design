import { Component } from '@angular/core';

@Component({
  selector: 'app-best-practices',
  standalone: true,
  imports: [],
  templateUrl: './best-practices.component.html',
  styleUrl: './best-practices.component.scss'
})
export class BestPracticesComponent {
  additionalInfo = '';

  show(info: string) {
    this.additionalInfo = info
  }

  reset() {
    this.additionalInfo = '';
  }
}
