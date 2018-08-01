import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  // constructor(private el : ElementRef, private renderer : Renderer2) { }

  @HostBinding('style.color') color : string = 'blue';
  @Input() basicColor : string = 'green';


  ngOnInit(): void {
      // this.renderer.setStyle(this.el.nativeElement, 'color', 'green' )
  }

  @HostListener('mouseover') mouseover($event: Event) {
    // this.renderer.setStyle(this.el.nativeElement , 'color', 'red');
    this.color = 'red';

  }

  @HostListener('mouseout') mouseout($event: Event) {
    // this.renderer.setStyle((<HTMLInputElement>event.target) , 'color', 'green');
    this.color = this.basicColor;
  }

}
