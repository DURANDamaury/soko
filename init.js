import {generateTileScreen} from './mapTile.js'
import {placeCaisses} from './caisses.js'
import { placePerso } from './perso.js';

function init (largeurTile,hauteurTile,table)
    {
        generateTileScreen(table);
        placeCaisses(largeurTile,hauteurTile,table);
        placePerso(largeurTile,hauteurTile,table);
        return
    }

export {init}

