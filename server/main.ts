import {loadCurworld} from './load-curworld';
import {loadCurmenber} from './load-curmenber';
import {loadMenbers} from './load-menbers';

Meteor.startup(loadMenbers);
Meteor.startup(loadCurworld);
Meteor.startup(loadCurmenber);
