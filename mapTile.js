import { table } from "./data.js";

//trouve l'image à partir du numéro de tile et retourne le chemin
function getTileImage(tileNumber)
    {
        //Table de correspondance numéro tile, image
        const tiles = 
            [
                {numero: 0 , image: '/gfxs/sol.png'},
                {numero: 1 , image: '/gfxs/mur.png'},
                {numero: 2 , image: '/gfxs/caisse.png'}
            ]
        const image = tiles.find(element => element.numero === tileNumber)
        return image.image
    }


function generateTileScreen()
    {
        const largeur = table.largeur;
        const hauteur = table.hauteur;
        const map = table.map;
        let tileImage = document.getElementById('game');
        let tileNumber = 0;
        //boucle de lecture de la table
        for (let i=0; i<hauteur; i++)
            {
                //boucle des lignes
                const ligne = document.createElement('div')
                ligne.setAttribute('class','ligne')
                for (let t=0; t<largeur; t++)
                    {
                        const tile = map[tileNumber]
                        const tileImg = getTileImage(tile)
                        const img = document.createElement('img')
                        img.setAttribute('src',tileImg)
                        img.setAttribute('alt','tile')
                        ligne.appendChild(img)
                        tileNumber++
                    }
                tileImage.appendChild(ligne)
            }
    }

export {generateTileScreen};