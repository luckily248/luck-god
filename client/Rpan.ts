import {Component, View} from 'angular2/core';

import {Curmenber} from 'collections/curmenber';

import {RouterLink} from 'angular2/router';

@Component({
	selector: 'Rpan'
})
@View({
	templateUrl: 'client/Rpan.html',
	directives: [RouterLink]
})

export class Rpan {
	curmenber: Mongo.Cursor<Object>;

	constructor () {
		this.curmenber = Curmenber.find({ location: { $gt: 3,$lt:7 } },{sort: { location: 1 } });
	}
}

