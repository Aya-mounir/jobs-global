// src/app/see-more-less.directive.ts
import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  standalone:true,
  selector: '[appSeeMoreLess]'
})
export class SeeMoreLessDirective {
  @Input() maxLength: number = 100;
  private expanded = false;
  private originalContent!: string ;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.originalContent = this.el.nativeElement.innerHTML;
    this.updateView();
  }

  @HostListener('mouseenter')
  onMouseMove() {
    this.expanded = !this.expanded;
    this.updateView();
  }

  private updateView() {
    if (this.expanded) {
      this.el.nativeElement.innerHTML = this.originalContent + ' <span class="toggle">See Less</span>';
    } else {
      const truncatedContent = this.originalContent.slice(0, this.maxLength) + '... <span class="toggle">See More</span>';
      this.el.nativeElement.innerHTML = truncatedContent;
    }
  }
}
