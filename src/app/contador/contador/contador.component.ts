import  { Component } from '@angular/core';
@Component({
    selector: 'app-contador',
    template: `
        <h1>{{ titulo }}</h1>
        <h2>La base es de : <strong>{{base}}</strong></h2>

        <button (click)="acumular(this.base)"> + {{base}} </button>

        <span> {{ numero }} </span>

        <button (click)="acumular(-this.base)"> - {{base}} </button>
    `
})
export class ContadorComponent{
    titulo: string = 'Contador APP';
    numero: number = 10;
    base  : number = 5;
  
    acumular( valor:number ){
      this.numero += valor;
    }
}