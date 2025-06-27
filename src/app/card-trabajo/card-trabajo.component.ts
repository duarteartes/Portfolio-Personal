import { Component, Input, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Trabajo } from '../services/trabajos.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card-trabajo',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './card-trabajo.component.html',
  styleUrl: './card-trabajo.component.css'
})
export class CardTrabajoComponent implements AfterViewInit {
  @Input() trabajo!: Trabajo;
  @Input() index: number = 0;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const card = this.el.nativeElement.querySelector('.card-trabajo');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add('visible');
          (entry.target as HTMLElement).style.transitionDelay = `${this.index * 0.15}s`;
        } else {
          (entry.target as HTMLElement).classList.remove('visible');
        }
      });
    }, {
      threshold: 0.1
    });

    observer.observe(card);
  }
}