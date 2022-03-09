import { Component,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent  {
  @Input()
  title:string = ""
  @Input()
  price:string = ''
  @Input()
  conteudo1:string = ""
  @Input()
  conteudo2:string = ''
  @Input()
  conteudo3:string = ''
  @Input()
  fundo=''
  @Input()
  cor = ''
  @Input()
  tamanho=''
  @Output()
  clicou:EventEmitter<any> = new EventEmitter<any>()
  emitir():void{
    this.clicou.emit()
  }
}
