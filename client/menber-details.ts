import {Component, View} from 'angular2/core';

import {RouteParams} from 'angular2/router';

import {Curmenber} from 'collections/curmenber';

@Component({
	selector: 'menber-details'
})
@View({
	templateUrl: '/client/menber-details.html'
})
export class MenberDetails {
	menber: Object;

	constructor(params: RouteParams) {
		var menberid = params.get('menberId');
		this.menber = Curmenber.findOne(menberid);
	}
}