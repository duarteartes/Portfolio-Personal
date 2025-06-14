import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  standalone: true,
  imports: [],
  templateUrl: './sobre-mi.component.html',
  styleUrl: './sobre-mi.component.css'
})
export class SobreMiComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const downloadBtn = document.getElementById('downloadCV');
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
