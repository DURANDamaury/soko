import { init } from "./init.js";
import { main } from "./main.js";

var largeurTile = 64;
var hauteurTile = 64;

const table = 
    {
        largeur : 16,
        hauteur : 8,
        map : 
            [
                1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
                1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
                1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
                1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
                1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
                1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
                1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
                1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
            ],
        //nombre de caisses dans le niveau
        nbCaisses: 2,
        //attention les coordonnées de chaque caisse commencent en 0.
        xCaisses: [2,4],
        yCaisses: [3,6],
        xyPerso: [3,3],
        directionPerso: "b"
    }
        
init(largeurTile,hauteurTile,table);
console.log('test0')
main(largeurTile,hauteurTile,table)

