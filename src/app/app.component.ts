import { Component } from '@angular/core';
import { GithubService } from './services/github.service';

@Component({
	selector: 'app-root',
	template: `
		<navbar></navbar>
		<div class="container">
			<profile></profile>
		</div>
	`,
	providers: [GithubService]
})
export class AppComponent {

}
