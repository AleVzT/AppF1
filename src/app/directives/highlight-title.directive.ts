import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightTitle]'
})
export class HighlightTitleDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
    this.renderer.setStyle(this.el.nativeElement, 'textAlign', 'center');
    this.renderer.setStyle(this.el.nativeElement, 'textShadow', '2px 2px 8px rgb(255, 60, 0)');
    this.renderer.setStyle(this.el.nativeElement, 'fontWeight', 'bold');
    this.renderer.setStyle(this.el.nativeElement, 'marginBottom', '32px');
  }
}
