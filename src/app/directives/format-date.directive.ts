import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DatePipe } from '@angular/common';

@Directive({
  selector: '[appFormatDate]'
})
export class FormatDateDirective implements OnChanges {
  @Input('appFormatDate') date: string | null = null;

  constructor(private el: ElementRef, private datePipe: DatePipe) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['date']) {
      this.formatDate();
    }
  }

  private formatDate(): void {
    if (this.date) {
      const formattedDate = this.datePipe.transform(this.date, 'dd-MM-yyyy');
      this.el.nativeElement.textContent = formattedDate; 
    }
  }
}
