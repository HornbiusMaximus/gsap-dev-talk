import { Component, ViewChild, ElementRef, AfterViewInit, ViewChildren, QueryList, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { TimelineMax } from 'gsap';

import {
	animateBtnClick,
	animateBorderBoxIn,
	animateBtnIn,
	animateDescIn,
	animateTitleIn,
	animateGsapManIn,
	animatePageOut
} from './welcome.animations';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements AfterViewInit {
	@ViewChild('topicBtn') private _topicBtn: ElementRef;
	@ViewChild('introTitle') private _introTitle: ElementRef;
	@ViewChild('introDesc') private _introDesc: ElementRef;
	@ViewChild('gsapMan') private _gsapMan: ElementRef;
	@ViewChild('pageShell') private _pageShell: ElementRef;
	@ViewChildren('borderCover') private _borderCovers: QueryList<ElementRef>;

	get topicBtn() {
		return this._topicBtn.nativeElement;
	}

	get introTitle() {
		return this._introTitle.nativeElement.children;
	}

	get introDesc() {
		return this._introDesc.nativeElement;
	}

	get gsapMan() {
		return this._gsapMan.nativeElement;
	}

	get pageShell() {
		return this._pageShell.nativeElement;
	}

	get borderCovers() {
		return this._borderCovers['_results'].map((ele) => ele.nativeElement);
	}

	constructor(private router: Router, private ngZone: NgZone) { }

	ngAfterViewInit() {
		new TimelineMax({delay: 1})
			.add(animateTitleIn(this.introTitle))
			.add(animateBorderBoxIn(this.borderCovers), '-=1')
			.add(animateDescIn(this.introDesc), '-=1')
			.add(animateBtnIn(this.topicBtn), '-=0.9')
			.add(animateGsapManIn(this.gsapMan), '-=0.5');
	}

	btnClick() {
		new TimelineMax()
			.add(animateBtnClick(this.topicBtn))
			.add(animatePageOut(this.pageShell))
			.add(() => this.ngZone.run(() => {
				this.nextPage();
			}));
	}

	nextPage() {
		this.router.navigate(['/select-turtle']);
	}
}
