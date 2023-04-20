import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appAdvanced3Highlight]'
})
export class Advanced3HighlightDirective {

  @Input() coloreScelto: string = "";

  constructor() { }

  @HostBinding('style.backgroundColor') coloreSfondo: string = '';

  @HostListener('mouseenter') mouseenter(){
    this.coloreSfondo = this.coloreScelto;
  }

  @HostListener('mouseleave') mouseleave(){
    this.coloreSfondo = "transparent"
  }

}
