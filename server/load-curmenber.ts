import {Curmenber} from 'collections/curmenber';
import {Menbers} from 'collections/menbers';

export function loadCurmenber() {
    if (Curmenber.find().count() === 0) {
        var i = 1;
        var count = Menbers.find({ random: { $gte: Random.fraction() } }, { limit: 6 }).count();

        Menbers.find({ random: { $gte: Random.fraction() } }, { limit: 6 }).forEach(function(menber) {
            menber.location = i;
            menber.maxhp = 100;
            Curmenber.insert(menber);
            i += 1;
        });

        if(count<6) {
            Menbers.find({ random: { $gte: Random.fraction() } }, { limit: 6-count }).forEach(function(menber) {
                menber.location = i;
                menber.maxhp = 100;
                Curmenber.insert(menber);
                i += 1;
            });
        }
        
    }
};