import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SelectTurtleComponent } from './select-turtle/select-turtle.component';
import { TurtleDetailsComponent } from './turtle-details/turtle-details.component';

const appRoutes: Routes = [
	{
		path: '',
		component: WelcomeComponent
	},
	{
		path: 'select-turtle',
		component: SelectTurtleComponent
	},
	{
		path: 'turtle-details/:turtle',
		component: TurtleDetailsComponent
	},
	{
		path: '**',
		redirectTo: ''
	}
];

export const AppRouting = RouterModule.forRoot(appRoutes);
