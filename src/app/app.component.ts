import { Component } from '@angular/core';
import  { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private snackBar: MatSnackBar) {}

  openSnackBar() {
    this.snackBar.open('Voce escolheu este plano.','fechar');
  }  
}
