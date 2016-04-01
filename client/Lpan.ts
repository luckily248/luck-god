import {Component, View} from 'angular2/core';

import {Curmenber} from 'collections/curmenber';

import {RouterLink} from 'angular2/router';

@Component({
	selector: 'Lpan'
})
@View({
	templateUrl: 'client/Lpan.html',
	directives: [RouterLink]
})

export class Lpan {
	curmenber: Mongo.Cursor<Object>;

	constructor () {
		this.curmenber = Curmenber.find({location:{$lt:4,$gt:0}},{sort:{location:1}});
	}
}
