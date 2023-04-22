function placePerso(largeurTile,hauteurTile,table)
    {
        const imagePerso = 
            [
                {direction:'h' , image:'./gfxs/perso/h.png'},
                {direction:'b' , image:'./gfxs/perso/b.png'},
                {direction:'g' , image:'./gfxs/perso/g.png'},
                {direction:'d' , image:'./gfxs/perso/d.png'}
            ]
        const xPerso = table.xyPerso[0];
        const yPerso = table.xyPerso[1];
        const directionPerso = table.directionPerso;
        const adresseImagePersoInit = imagePerso.find(element => element.direction === directionPerso).image;
        const imagePersoSet = document.createElement('img');
        imagePersoSet.setAttribute('class','perso');
        imagePersoSet.setAttribute('src',adresseImagePersoInit);
        const xPersoScreen = xPerso*largeurTile;
        const yPersoScreen = yPerso*hauteurTile;
        imagePersoSet.style.top = xPersoScreen + 'px';
        imagePersoSet.style.left = yPersoScreen + 'px';
        const game = document.getElementById('game');
        game.appendChild(imagePersoSet);

    }

function movePerso(up,down,left,right)
    {
        console.log(up,down,left,right)
        if (up) {console.log('up')}
        else if (down){console.log('down')}
        else if (left){console.log('left')}
        else if (right){console.log('right')}
    }

export {placePerso,movePerso}