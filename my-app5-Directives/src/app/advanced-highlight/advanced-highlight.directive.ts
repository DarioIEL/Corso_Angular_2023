import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAdvancedHighlight]'
})
export class AdvancedHighlightDirective implements OnInit{

  constructor(private elementRef: ElementRef, private render: Renderer2) { }

  ngOnInit(): void {}

  //Host è l'elemento ospitante, su cui applico, la direttiva

  @HostListener('mouseenter') mouseenter(eventData: Event){
    this.render.setAttribute(this.elementRef.nativeElement, "class", "bluChiaro");
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    this.render.removeAttribute(this.elementRef.nativeElement, "class");
  }

}
