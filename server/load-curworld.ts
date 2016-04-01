import {Curworld} from 'collections/curworld';
 
export function loadCurworld() {
    if (Curworld.find().count() === 0) {
 
        Curworld.insert({
            'scene':'grass',
            'event':'fight'
        });
    
  }
};