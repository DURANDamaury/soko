import { largeurTile } from "./data.js";
import { hauteurTile } from "./data.js";
import { table } from "./data.js";
import { player } from "./player.js";

function placePerso()
    {
        const imagePerso = 
            [
                {direction:'h' , image:'./gfxs/perso/h.png'},
                {direction:'b' , image:'./gfxs/perso/b.png'},
                {direction:'g' , image:'./gfxs/perso/g.png'},
                {direction:'d' , image:'./gfxs/perso/d.png'}
            ]

        const directionPerso = player.directionPerso;
        const adresseImagePersoInit = imagePerso.find(element => element.direction === directionPerso).image;
        const imagePersoSet = document.createElement('img');


        imagePersoSet.setAttribute('class','perso');
        imagePersoSet.setAttribute('src',adresseImagePersoInit);
        const xPersoScreen = player.x*largeurTile;
        const yPersoScreen = player.y*hauteurTile;
        imagePersoSet.style.top = yPersoScreen + 'px';
        imagePersoSet.style.left = xPersoScreen + 'px';
        const game = document.getElementById('game');
        game.appendChild(imagePersoSet);

    }

function movePerso()
    {
        console.log(player.up,player.down,player.left,player.right)
        if (player.up) {console.log('up')}
        else if (player.down){console.log('down')}
        else if (player.left){console.log('left')}
        else if (player.right){console.log('right')}
    }

export {placePerso,movePerso}