import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[toggleClass]',
  standalone: true
})
export class ToggleDirective implements OnChanges {

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  @Input() condition: boolean = false;

  ngOnChanges() {
    if (this.condition) {
      this.renderer.addClass(this.el.nativeElement, 'btn-secondary');
      this.renderer.removeClass(this.el.nativeElement, 'btn-success');
    } else {
      this.renderer.addClass(this.el.nativeElement, 'btn-success');
      this.renderer.removeClass(this.el.nativeElement, 'btn-secondary');
    }
  } 
}