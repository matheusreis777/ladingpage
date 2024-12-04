import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router'; // Importe o Router

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // Certifique-se de que o nome do arquivo está correto
})
export class AppComponent {
  title = 'landingpage';

  constructor(private router: Router) {} // O construtor agora está dentro da classe

  navigateToHome() {
    this.router.navigate(['/home']); // Navega para a rota /home
  }

  navigateToAbout() {
    this.router.navigate(['/sobre']); // Navega para a rota /about
  }

  navigateToContact() {
    this.router.navigate(['/contato']); // Navega para a rota /home
  }

  navigateToAppArea() {
    this.router.navigate(['/projetos']); // Navega para a rota /about
  }

  // Adicione outros métodos de navegação aqui se necessário
}
