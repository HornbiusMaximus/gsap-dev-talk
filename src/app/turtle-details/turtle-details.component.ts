import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
	selector: 'app-turtle-details',
	templateUrl: './turtle-details.component.html',
	styleUrls: ['./turtle-details.component.scss']
})
export class TurtleDetailsComponent implements OnInit, OnDestroy {
	currTurtle: String = '';
	killSubscriptions = new Subject();

	ninjaTurtles: {} = {
		'leo': 'Leonardo',
		'ralph': 'Raphael',
		'donnie': 'Donatello',
		'mikey': 'Michelangelo'
	};

	constructor(private route: ActivatedRoute) { }

	ngOnInit() {
		this.route.params
			.pipe(takeUntil(this.killSubscriptions))
			.subscribe((params) => this.currTurtle = params['turtle']);
	}

	ngOnDestroy() {
		this.killSubscriptions.next();
	}
}
