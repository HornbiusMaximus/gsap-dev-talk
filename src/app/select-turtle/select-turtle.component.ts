import { Component, ElementRef, AfterViewInit, ViewChild, ViewChildren, QueryList, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { TimelineMax } from 'gsap';

import {
	animateBackgroundIn,
	animateBtnClick,
	animateFlyIntoSewer,
	animateHideElements,
	animateIconsIn,
	animateLogoIn,
	animateLogoOut,
	animateManholeIn,
	animateManholeSlide,
	animateIconPulse
} from './select-turtle.animations';

@Component({
	selector: 'app-select-turtle',
	templateUrl: './select-turtle.component.html',
	styleUrls: ['./select-turtle.component.scss']
})
export class SelectTurtleComponent implements AfterViewInit {
	@ViewChild('manhole') private _manhole: ElementRef;
	@ViewChild('tmntLogo') private _tmntLogo: ElementRef;
	@ViewChildren('bgElement') private _bgElements: QueryList<ElementRef>;
	@ViewChildren('icon') private _icons: QueryList<ElementRef>;

	selectedTurtleClass: String = '';
	ninjaTurtles: Array<{}> = [
		{
			id: 'leo',
			name: 'Leonardo'
		},
		{
			id: 'ralph',
			name: 'Raphael'
		},
		{
			id: 'donnie',
			name: 'Donatello'
		},
		{
			id: 'mikey',
			name: 'Michelangelo'
		}
	];

	get manhole() {
		return this._manhole.nativeElement;
	}

	get tmntLogo() {
		return this._tmntLogo.nativeElement;
	}

	get bgElements() {
		return this._bgElements['_results'].map((ele) => ele.nativeElement);
	}

	get icons() {
		return this._icons['_results'].map((ele) => ele.nativeElement);
	}

	constructor(private router: Router, private ngZone: NgZone) { }

	ngAfterViewInit() {
		new TimelineMax({delay: 0.25})
			.add(animateManholeIn(this.manhole))
			.add(animateLogoIn(this.tmntLogo), '+=0.25')
			.add(animateBackgroundIn(this.bgElements), '-=1.2')
			.add(animateIconsIn(this.icons), '-=1')
			.add(animateIconPulse(this.icons));
	}

	selectTurtle(turtle) {
		if (this.selectedTurtleClass !== '') {
			return;
		}

		this.selectedTurtleClass = turtle;
		const selectedTurtle = this.icons.find((ele) => ele.id === turtle);

		new TimelineMax()
			.add(animateBtnClick(selectedTurtle))
			.add(animateManholeSlide(this.manhole), 'sync-=1')
			.add(animateLogoOut(this.tmntLogo), 'sync-=1')
			.add(animateHideElements([this.icons, this.manhole.lastChild]), '+=0.1')
			.add(animateFlyIntoSewer(this.manhole), '-=0.25')
			.add(() => this.ngZone.run(() => {
				this.nextPage(turtle);
			}));
	}

	nextPage(selectedTurtle) {
		this.router.navigate(['/turtle-details/' + selectedTurtle]);
	}
}
