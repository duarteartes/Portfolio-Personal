import { Component } from '@angular/core';
import { CardTrabajoComponent } from '../card-trabajo/card-trabajo.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CardTrabajoComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

}
