
export const largeurTile = 64;
export const hauteurTile = 64;

export const table = 
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

