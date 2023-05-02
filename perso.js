import { largeurTile } from "./data.js";
import { hauteurTile } from "./data.js";
import { table } from "./data.js";
import { player } from "./player.js";
import { imagePerso } from "./player.js";

const vitesse = 2;

function logxy()
    {
        console.log("x="+player.x+" y="+player.y)
    }

// **********************************************************
// ***                  TESTS COLLISION                   ***
// **********************************************************
function testLeft (x,y)
    {
        const pointeurLigne = y * table.largeur;
        const pointeurTile = pointeurLigne + x;
        const valeurTile = table.map[pointeurTile];
        return valeurTile;
    }
// **********************************************************

function placePerso()
    {
        

        const direction = player.direction;
        const adresseImagePersoInit = imagePerso.find(element => element.direction === direction).image;
        const imagePersoSet = document.createElement('img');


        imagePersoSet.setAttribute('id','perso');
        imagePersoSet.setAttribute('src',adresseImagePersoInit);
        const xPersoScreen = player.x*largeurTile;
        const yPersoScreen = player.y*hauteurTile;
        imagePersoSet.style.top = yPersoScreen + 'px';
        imagePersoSet.style.left = xPersoScreen + 'px';
        const game = document.getElementById('game');
        game.appendChild(imagePersoSet);

    }

function modifyPerso()
    {
        const direction = player.direction;
        const adresseImagePersoInit = imagePerso.find(element => element.direction === direction).image;
        //on modifie l'adresse de l'image
        const perso = document.getElementById('perso')
        
        perso.setAttribute('src',adresseImagePersoInit);

        const xPersoScreen = player.x*largeurTile;
        const yPersoScreen = player.y*hauteurTile;
        //perso.style.top = yPersoScreen + 'px';
        //perso.style.left = xPersoScreen + 'px';
    }


function moveRight()
    { 
        if (player.moving)return;
        player.direction = 'd';
        modifyPerso();

        const x = player.x+1;
        const y = player.y;
        const valeurTile = testLeft(x,y)
        if (valeurTile != 1)
            {
                player.moving = true;
                let xperso = player.x * largeurTile;
                const xpersoDestination = xperso+largeurTile;
                const perso = document.getElementById('perso');
                let xpos=0;
                function movePersoRight()
                    {
                        if (player.moving)
                            {
                                perso.style.transform = "translateX(" + xpos + "px)"
                                xpos=xpos+vitesse
                                requestAnimationFrame(movePersoRight)
                            }
                        if (xperso + xpos > xpersoDestination)
                            {
                                perso.style.left = xpersoDestination + 'px';
                                perso.style.transform = '';
                                player.moving = false;
                            }
                    }
                movePersoRight()
                player.x++;
                logxy()
            }
    }

function moveLeft()
    {
        if (player.moving)return;
        player.direction = 'g'
        modifyPerso()

        const x = player.x-1;
        const y = player.y;
        const valeurTile = testLeft(x,y)
        if (valeurTile != 1)
            {
                player.moving = true;
                let xperso = player.x * largeurTile;
                const xpersoDestination = xperso-largeurTile
                const perso = document.getElementById('perso')
                let xpos=0;
                function movePersoLeft()
                    {
                        if (player.moving)
                            {
                                perso.style.transform = "translateX(" + xpos + "px)"
                                xpos=xpos-vitesse
                                requestAnimationFrame(movePersoLeft)
                            }
                        
                        if (xperso + xpos < xpersoDestination)
                            {
                                player.moving = false;
                                perso.style.left = xpersoDestination + 'px';
                                perso.style.transform = ''
                            }
                    }
                movePersoLeft()       
                player.x--;
                logxy()
            }
    }

function moveUp()
    {
        if (player.moving)return;
        player.direction = 'h'
        modifyPerso()

        const x = player.x;
        const y = player.y-1;
        const valeurTile = testLeft(x,y)
        //si c'est un mur(1) on ne fait rien
        if (valeurTile != 1)
            {
                player.moving = true;
                let yperso = player.y * hauteurTile;
                const ypersoDestination = yperso-hauteurTile
                const perso = document.getElementById('perso')
                let ypos=0;
                function movePersoUp()
                    {
                        if (player.moving)
                            {
                                perso.style.transform = "translateY(" + ypos + "px)"
                                ypos=ypos-vitesse
                                requestAnimationFrame(movePersoUp)
                            }
                        
                        if (yperso + ypos < ypersoDestination)
                            {
                                player.moving = false;
                                perso.style.top = ypersoDestination + 'px';
                                perso.style.transform = ''
                            }
                    }
                movePersoUp()     
                player.y--
                logxy()
            }
    }

function moveDown()
    {
        if (player.moving)return;
        player.direction = 'b'
        modifyPerso()

        const x = player.x;
        const y = player.y+1;
        const valeurTile = testLeft(x,y)
        //si c'est un mur(1) on ne fait rien
        if (valeurTile != 1)
            {     
                player.moving = true;      
                let yperso = player.y * hauteurTile;
                const ypersoDestination = yperso+hauteurTile
                const perso = document.getElementById('perso')
                let ypos=0;
                function movePersoDown()
                    {
                        if (player.moving)
                            {
                                perso.style.transform = "translateY(" + ypos + "px)"
                                ypos=ypos+vitesse
                                requestAnimationFrame(movePersoDown)
                            }
                        
                        if (yperso + ypos > ypersoDestination)
                            {
                                player.moving = false;
                                perso.style.top = ypersoDestination + 'px';
                                perso.style.transform = ''
                            }
                    }
                movePersoDown()  

                player.y++
                logxy()
            }
    }
export {placePerso,moveLeft,moveRight,moveUp,moveDown}