import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  standalone: true,
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements AfterViewInit {

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const target = entry.target as HTMLElement;

        if (entry.isIntersecting) {
          target.classList.add('active');

          if (target.classList.contains('stars')) {
            target.classList.add('animate-in');
            target.classList.remove('animate-out');
          }

          if (target.classList.contains('softskills-item')) {
            target.classList.add('animate-in');
            target.classList.remove('animate-out');
          }

          // Animar botón descarga CV
          if (target.id === 'downloadCV' || target.classList.contains('button-container')) {
            target.classList.add('animate-in');
            target.classList.remove('animate-out');
          }

        } else {
          target.classList.remove('active');

          if (target.classList.contains('stars')) {
            target.classList.remove('animate-in');
            target.classList.add('animate-out');
          }

          if (target.classList.contains('softskills-item')) {
            target.classList.remove('animate-in');
            target.classList.add('animate-out');
          }

          if (target.id === 'downloadCV' || target.classList.contains('button-container')) {
            target.classList.remove('animate-in');
            target.classList.add('animate-out');
          }
        }
      });
    }, { threshold: 0.15 });

    const stars = this.el.nativeElement.querySelectorAll('.stars');
    stars.forEach((el: HTMLElement) => observer.observe(el));

    const softskills = this.el.nativeElement.querySelectorAll('.softskills-item');
    softskills.forEach((el: HTMLElement, index: number) => {
      el.style.transitionDelay = `${index * 100}ms`;
      observer.observe(el);
    });

    const boxes = this.el.nativeElement.querySelectorAll('.box');
    boxes.forEach((el: HTMLElement) => observer.observe(el));

    // Observar el contenedor del botón para la animación
    const buttonContainer = this.el.nativeElement.querySelector('.button-container');
    if (buttonContainer) {
      observer.observe(buttonContainer);
    }

    // Botón descarga CV
    const downloadBtn = this.el.nativeElement.querySelector('#downloadCV');
    if (downloadBtn) {
      downloadBtn.addEventListener('click', () => {
        const link = document.createElement('a');
        link.href = 'assets/CvSilviaDuarteLargo2025.pdf';
        link.download = 'CvSilviaDuarteLargo2025.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    }
  }
}
