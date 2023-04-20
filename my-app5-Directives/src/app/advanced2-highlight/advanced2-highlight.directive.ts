import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAdvanced2Highlight]'
})
export default class Advanced2HighlightDirective {

  constructor() { }


  @HostBinding('style.backgroundColor') coloreSfondo: string = "";

  @HostListener('mouseenter') mouseenter(eventData: Event){
    this.coloreSfondo = "lightblue";
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    this.coloreSfondo = "transparent";
  }


}
