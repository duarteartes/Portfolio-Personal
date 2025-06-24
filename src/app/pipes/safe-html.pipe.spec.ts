import { SafeHtmlPipe } from '../pipes/safe-html.pipe';
import { DomSanitizer } from '@angular/platform-browser';

describe('SafeHtmlPipe', () => {
  let sanitizer: DomSanitizer;
  let pipe: SafeHtmlPipe;

  beforeEach(() => {
    // Mock de DomSanitizer
    sanitizer = {
      bypassSecurityTrustHtml: (val: string) => val
    } as Partial<DomSanitizer> as DomSanitizer;

    pipe = new SafeHtmlPipe(sanitizer);
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should sanitize HTML', () => {
    const html = '<p>Test</p>';
    expect(pipe.transform(html)).toBe(html);
  });
});