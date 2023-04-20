import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})

//quando implemento un'interfaccia devo OBBLIGATORIAMENTE implementarne i metodi
export class BasicHighlightDirective implements OnInit{

  //metto in atto il sistema della dependency injection
  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = 'lightgreen';
  }

}
