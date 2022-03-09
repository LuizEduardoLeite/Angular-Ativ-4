import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  alerta1(){
    alert('Você selecionou o plano Básico')
  }
  alerta2(){
    alert('Você selecionou o plano Profissional')
  }
  alerta3(){
    alert('Você selecionou o plano Mestre')
  }
}
