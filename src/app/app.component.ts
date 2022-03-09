import { Component } from '@angular/core';
import  { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private snackBar: MatSnackBar) {}

  openSnackBar1() {
    this.snackBar.open('Voce escolheu o plano Básico','fechar');
  }
  openSnackBar2() {
    this.snackBar.open('Voce escolheu o plano Profissional','fechar');
  }
  openSnackBar3() {
    this.snackBar.open('Voce escolheu o plano Mestre','fechar');
  }
  
}
