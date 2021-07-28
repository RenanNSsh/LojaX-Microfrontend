import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    this.addMicroFrontEndCarrinho();
  }

  addMicroFrontEndCarrinho() {
    const script = document.createElement('script');
    script.src = 'http://localhost:8080/main.js';
    document.body.appendChild(script);
  }

  escutaComprou() {
    const carrinho = document.querySelector('carrinho-app');
    carrinho?.addEventListener('comprado', () => {
      console.log('comprou');
    })
  }

}
