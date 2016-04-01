import {Menbers} from 'collections/menbers';

export function loadMenbers() {
    if (Menbers.find().count() === 0) {

        var menbers = [
        {
            'name': 'wiz',
            'iconsrc': 'icon/ppl.png',
            'location': 0,
            'random': Random.fraction()
        },
        {
            'name': 'b',
            'iconsrc': 'icon/ppl.png',
            'location': 1,
            'random': Random.fraction()
        },
        {
            'name': 'c',
            'iconsrc': 'icon/ppl.png',
            'location': 1,
            'random': Random.fraction()
        },
        {
            'name': 'd',
            'iconsrc': 'icon/ppl.png',
            'location': 1,
            'random': Random.fraction()
        },
        {
            'name': 'e',
            'iconsrc': 'icon/ppl.png',
            'location': 1,
            'random': Random.fraction()
        },
        {
            'name': 'f',
            'iconsrc': 'icon/ppl.png',
            'location': 1,
            'random': Random.fraction()
        },
        {
            'name': 'g',
            'iconsrc': 'icon/ppl.png',
            'location': 1,
            'random': Random.fraction()
        },
        {
            'name': 'h',
            'iconsrc': 'icon/ppl.png',
            'location': 1,
            'random': Random.fraction()
        },
        {
            'name': 'i',
            'iconsrc': 'icon/ppl.png',
            'location': 1,
            'random': Random.fraction()
        },
        {
            'name': 'j',
            'iconsrc': 'icon/ppl.png',
            'location': 1,
            'random': Random.fraction()
        }
        ];

        for (var i = 0; i < menbers.length; i++) {
            Menbers.insert(menbers[i]);
        }

    }
};