import {
  Component,
  ElementRef,
  Inject,
  PLATFORM_ID,
  Renderer2,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-whyus',
  templateUrl: './whyus.component.html',
  styleUrls: ['./whyus.component.less'],
})
export class WhyusComponent implements AfterViewInit {
  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {}

  // Why Choose Us Section
  @ViewChild('whyUsContainer', { static: false }) whyUsContainer!: ElementRef;
  @ViewChild('whyUsHeader', { static: false }) whyUsHeader!: ElementRef;
  @ViewChild('expertiseCard', { static: false }) expertiseCard!: ElementRef;
  @ViewChild('expertiseHeading', { static: false })
  expertiseHeading!: ElementRef;
  @ViewChild('expertiseText', { static: false }) expertiseText!: ElementRef;
  @ViewChild('marketCard', { static: false }) marketCard!: ElementRef;
  @ViewChild('marketNumber', { static: false }) marketNumber!: ElementRef;
  @ViewChild('marketText', { static: false }) marketText!: ElementRef;
  @ViewChild('serviceCard', { static: false }) serviceCard!: ElementRef;
  @ViewChild('securityCard', { static: false }) securityCard!: ElementRef;
  @ViewChild('securityText', { static: false }) securityText!: ElementRef;
  @ViewChild('efficiencyCard', { static: false }) efficiencyCard!: ElementRef;
  @ViewChild('efficiencyText', { static: false }) efficiencyText!: ElementRef;
  @ViewChild('supportCard', { static: false }) supportCard!: ElementRef;
  @ViewChild('supportNumber', { static: false }) supportNumber!: ElementRef;
  @ViewChild('supportText', { static: false }) supportText!: ElementRef;

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      if ('IntersectionObserver' in window) {
        // Header Observer
        const observerHeader = new IntersectionObserver(
          (entries, obs) => {
            let triggered = false;
            entries.forEach((entry) => {
              const action = entry.isIntersecting ? 'addClass' : 'removeClass';
              this.renderer[action](this.whyUsHeader.nativeElement, 'show');
              if (entry.isIntersecting) {
                triggered = true;
              }
            });

            if (triggered) {
              obs.disconnect();
            }
          },
          { threshold: 0.1 }
        );

        // Expertise Card Observer
        const observerExpertise = new IntersectionObserver(
          (entries, obs) => {
            let triggered = false;
            entries.forEach((entry) => {
              const action = entry.isIntersecting ? 'addClass' : 'removeClass';
              this.renderer[action](this.expertiseCard.nativeElement, 'show');
              this.renderer[action](
                this.expertiseHeading.nativeElement,
                'show'
              );
              this.renderer[action](this.expertiseText.nativeElement, 'show');
              if (entry.isIntersecting) {
                triggered = true;
              }
            });

            if (triggered) {
              obs.disconnect();
            }
          },
          { threshold: 0.2 }
        );

        // Market Stats Observer
        const observerMarket = new IntersectionObserver(
          (entries, obs) => {
            let triggered = false;
            entries.forEach((entry) => {
              const action = entry.isIntersecting ? 'addClass' : 'removeClass';
              this.renderer[action](this.marketCard.nativeElement, 'show');
              this.renderer[action](this.marketNumber.nativeElement, 'show');
              this.renderer[action](this.marketText.nativeElement, 'show');
              if (entry.isIntersecting) {
                triggered = true;
              }
            });

            if (triggered) {
              obs.disconnect();
            }
          },
          { threshold: 0.4 }
        );

        // Security & Efficiency Cards Observer
        const observerSecurityEfficiency = new IntersectionObserver(
          (entries, obs) => {
            let triggered = false;
            entries.forEach((entry) => {
              const action = entry.isIntersecting ? 'addClass' : 'removeClass';
              this.renderer[action](this.securityCard.nativeElement, 'show');
              this.renderer[action](this.securityText.nativeElement, 'show');
              this.renderer[action](this.efficiencyCard.nativeElement, 'show');
              this.renderer[action](this.efficiencyText.nativeElement, 'show');
              if (entry.isIntersecting) {
                triggered = true;
              }
            });

            if (triggered) {
              obs.disconnect();
            }
          },
          { threshold: 0.1 }
        );

        // Support Card Observer
        const observerSupport = new IntersectionObserver(
          (entries, obs) => {
            let triggered = false;
            entries.forEach((entry) => {
              const action = entry.isIntersecting ? 'addClass' : 'removeClass';
              this.renderer[action](this.supportCard.nativeElement, 'show');
              this.renderer[action](this.supportNumber.nativeElement, 'show');
              this.renderer[action](this.supportText.nativeElement, 'show');
              if (entry.isIntersecting) {
                triggered = true;
              }
            });

            if (triggered) {
              obs.disconnect();
            }
          },
          { threshold: 0.3 }
        );

        // Observing Elements
        observerHeader.observe(this.whyUsContainer.nativeElement);
        observerExpertise.observe(this.expertiseCard.nativeElement);
        observerMarket.observe(this.marketCard.nativeElement);
        observerSecurityEfficiency.observe(this.securityCard.nativeElement);
        observerSupport.observe(this.supportCard.nativeElement);
      } else {
        console.warn(
          'IntersectionObserver is not supported in this environment.'
        );
      }
    }
  }
}
