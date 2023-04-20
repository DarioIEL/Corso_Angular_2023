import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBasic2Highlight]'
})

export class Basic2HighlightDirective implements OnInit {

  constructor(private elementRef: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
      this.render.setAttribute(this.elementRef.nativeElement, 'class', 'rossoChiaro');
  }
}
