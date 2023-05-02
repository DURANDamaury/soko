import {generateTileScreen} from './mapTile.js'
import {placeCaisses} from './caisses.js'
import { placePerso } from './perso.js';
import { table } from './data.js';
import { hauteurTile } from './data.js';
import { largeurTile } from './data.js';

function init ()
    {
        generateTileScreen(table);
        placeCaisses(largeurTile,hauteurTile,table);
        placePerso(largeurTile,hauteurTile,table);
    }

export {init}

