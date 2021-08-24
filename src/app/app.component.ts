import { Component, OnInit } from '@angular/core';
import { User } from './user/user.model';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private userService: UserService) {

  }

  user: User = {
    name: 'Renan'
  };

  ngOnInit(): void {
    this.addMicroFrontEndCarrinho();
    this.userService.login(this.user);
  }

  addMicroFrontEndCarrinho() {
    const script = document.createElement('script');
    script.src = 'http://127.0.0.1:8080/main.js';
    document.body.appendChild(script);
  }


  escutaComprou() {
    const carrinho = document.querySelector('carrinho-app');
    carrinho?.addEventListener('comprado', () => {
      console.log('comprou');
    })
  }

}
