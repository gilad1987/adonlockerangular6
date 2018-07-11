import {
    AfterContentInit, AfterViewInit, Component, ElementRef, HostListener, Input, OnInit,
    ViewChild
} from '@angular/core';

@Component({
    selector: 'app-tooltip',
    templateUrl: './tooltip.component.html',
    styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit, AfterViewInit, AfterContentInit {

    private contentHeight;
    private contentWidth;
    private hostWidth;
    private timeout = 300;
    private timer;

    @Input()
    label;

    @ViewChild('content') content;

    @HostListener('mouseenter')
    onMouseEnter(): void {
        if (!this.isTimeoutLeft()) {
            this.content.nativeElement.style.display = 'none';
        }
        this.content.nativeElement.style.display = 'block';
        setTimeout(() => {
            this.content.nativeElement.style.transform = `translate(${(this.contentWidth - this.hostWidth) / 2}px,-${this.contentHeight + 25}px)`;
            this.content.nativeElement.style.opacity = 1;
        }, 0);
    }

    @HostListener('mouseleave')
    onMouseLeave(): void {
        this.content.nativeElement.style.transform = `translate(${(this.contentWidth - this.hostWidth) / 2}px,-${this.contentHeight + 5}px)`;
        this.content.nativeElement.style.opacity = 0;
        this.startTimer();
        setTimeout(() => {
            this.content.nativeElement.style.display = 'none';
        }, this.timeout);
    }


    constructor(private element: ElementRef) {
    }

    startTimer() {
        this.timer = new Date();
    }

    isTimeoutLeft() {
        const now = new Date();
        return !this.timer ? true : ((now.getTime() - this.timer.getTime()) > this.timeout);
    }

    ngOnInit() {
    }

    ngAfterContentInit() {

        setTimeout(() => {
            const host = this.element.nativeElement;
            this.hostWidth = host.offsetWidth;
            const contentElement = this.content.nativeElement;
            this.contentWidth = contentElement.offsetWidth;
            this.contentHeight = contentElement.offsetHeight;
            // contentElement.style.top = `${height / 2}px`;
            contentElement.style.transform = `translate(${(this.contentWidth - this.hostWidth) / 2}px,-${this.contentHeight + 5}px)`;
            // contentElement.style.right = `0px`;
            contentElement.style.width = `${this.contentWidth}px`;
            contentElement.style.height = `${this.contentHeight}px`;
            contentElement.style.position = 'absolute';
        }, 0);
    }

    ngAfterViewInit() {
    }

}
