import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBackgroundHighlight]'
})
export class BackgroundHighlightDirective implements OnInit {

  constructor(private el : ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = '#ec474385';
  }

}
