import { largeurTile } from "./data.js";
import { hauteurTile } from "./data.js";
import { table } from "./data.js";

function placeCaisses ()
    {
        const nbrCaisses = table.nbCaisses;
        for (let n=0 ; n<nbrCaisses; n++)
            {
                const xCaisse = table.xCaisses[n];
                const yCaisse = table.yCaisses[n];
                const xCaisseScreen = xCaisse*largeurTile;
                const yCaisseScreen = yCaisse*hauteurTile;
                const tileImage = document.getElementById('game');
                const caisse = document.createElement('img')
                caisse.setAttribute('src','/gfxs/caisse.png')
                caisse.setAttribute('class','caisse')
                caisse.style.top = yCaisseScreen + 'px'
                caisse.style.left = xCaisseScreen + 'px'
                tileImage.appendChild(caisse)
            }

    }


export {placeCaisses};