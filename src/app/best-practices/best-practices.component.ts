import {Component, inject} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-best-practices',
  standalone: true,
  imports: [],
  templateUrl: './best-practices.component.html',
  styleUrl: './best-practices.component.scss'
})
export class BestPracticesComponent {
  dialog = inject(MatDialog);

  additionalInfo = '';

  show(info: string) {
    this.additionalInfo = info
  }

  reset() {
    this.additionalInfo = '';
  }

  openDialog() {
    this.dialog.open(BestPracticesComponent, {})
  }
}
