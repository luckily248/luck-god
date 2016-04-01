import {Component, View, NgZone} from 'angular2/core';

import {Lpan} from 'client/Lpan';
import {Rpan} from 'client/Rpan';

@Component({
  selector: 'world'
})
@View({
  templateUrl: 'client/world.html',
  directives: [Lpan, Rpan]
})
export class World {}