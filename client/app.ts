import {Component, View, NgZone, provide} from 'angular2/core';

import {bootstrap} from 'angular2-meteor';

import {World} from 'client/world'

import {MenberDetails} from 'client/menber-details'

import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig, APP_BASE_HREF} from 'angular2/router';


@Component({
  selector: 'app'
})
@View({
  template: '<router-outlet>',
  directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    { path: '/', as: 'World', component: World },
    { path: '/menber/:menberId', as: 'MenberDetails', component: MenberDetails }
  ])

class Main {
}

bootstrap(Main, [ROUTER_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/' })]);
