import { Component, HostListener, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  originalText = `Soy una diseñadora gráfica con un fuerte<br>interés en el mundo del desarrollo web.<br>Después de varios años de experiencia<br>laboral en diseño, decidí expandir mis<br>horizontes y estudiar el ciclo<br>formativo de Grado Superior en<br>Desarrollo de Aplicaciones Web (DAW),<br>con el objetivo de especializarme<br>en Desarrollo Full-Stack y Frontend.`;
  displayText: string = '';

  ngOnInit(): void {
      this.updateText(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateText(event.target.innerWidth);
  }
  updateText(width: number) {
    if (width <= 768) {
      this.displayText = `Soy una diseñadora gráfica con un fuerte interés en el mundo del desarrollo web.<br><br>Después de varios años de experiencia laboral en diseño, decidí expandir mis horizontes y estudiar el ciclo formativo de Grado Superior en Desarrollo de Aplicaciones Web (DAW), con el objetivo de especializarme en Desarrollo Full-Stack y Frontend.`;
    } else {
      this.displayText = this.originalText;
    }
  }
}
