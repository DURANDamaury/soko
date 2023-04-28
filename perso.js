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
        perso.style.top = yPersoScreen + 'px';
        perso.style.left = xPersoScreen + 'px';
    }


function moveRight()
    { 
        player.direction = 'd';
        modifyPerso();

        const x = player.x+1;
        const y = player.y;
        const valeurTile = testLeft(x,y)
        if (valeurTile != 1)
            {
                let xperso = player.x * largeurTile;
                const xpersoDestination = xperso+largeurTile;
                const perso = document.getElementById('perso');
                let xpos=0;
                let animation = true;
                function movePersoRight()
                    {
                        if (animation)
                            {
                                perso.style.transform = "translateX(" + xpos + "px)"
                                xpos=xpos+vitesse
                                requestAnimationFrame(movePersoRight)
                            }
                        if (xperso + xpos > xpersoDestination)
                            {
                                animation = false;
                            }
                    }
                movePersoRight()
                player.x++;
                logxy()
            }
        else { return }
    }

function moveLeft()
    {
        player.direction = 'g'
        modifyPerso()

        const x = player.x-1;
        const y = player.y;
        const valeurTile = testLeft(x,y)
        if (valeurTile != 1)
            {
                let xperso = player.x * largeurTile;
                const xpersoDestination = xperso-largeurTile
                const perso = document.getElementById('perso')
                let xpos=0;
                let animation = true;
                function movePersoLeft()
                    {
                        if (animation)
                            {
                                perso.style.transform = "translateX(" + xpos + "px)"
                                xpos=xpos-vitesse
                                requestAnimationFrame(movePersoLeft)
                            }
                        
                        if (xperso + xpos < xpersoDestination)
                            {
                                animation = false;
                            }
                    }
                movePersoLeft()       
                player.x--;
                logxy()
            }
        else { return }
    }

function moveUp()
    {
        player.direction = 'h'
        modifyPerso()

        const x = player.x;
        const y = player.y-1;
        const valeurTile = testLeft(x,y)
        //si c'est un mur(1) on ne fait rien
        if (valeurTile != 1)
            {
                let yperso = player.y * hauteurTile;
                const ypersoDestination = yperso-hauteurTile
                const perso = document.getElementById('perso')
                let ypos=0;
                let animation = true;
                function movePersoUp()
                    {
                        if (animation)
                            {
                                perso.style.transform = "translateY(" + ypos + "px)"
                                ypos=ypos-vitesse
                                requestAnimationFrame(movePersoUp)
                            }
                        
                        if (yperso + ypos < ypersoDestination)
                            {
                                animation = false;
                            }
                    }
                movePersoUp()     
                player.y--
                logxy()
            }
        else { return }
    }

function moveDown()
    {
        player.direction = 'b'
        modifyPerso()

        const x = player.x;
        const y = player.y+1;
        const valeurTile = testLeft(x,y)
        //si c'est un mur(1) on ne fait rien
        if (valeurTile != 1)
            {           
                let yperso = player.y * hauteurTile;
                const ypersoDestination = yperso+hauteurTile
                const perso = document.getElementById('perso')
                let ypos=0;
                let animation = true;
                function movePersoDown()
                    {
                        if (animation)
                            {
                                perso.style.transform = "translateY(" + ypos + "px)"
                                ypos=ypos+vitesse
                                requestAnimationFrame(movePersoDown)
                            }
                        
                        if (yperso + ypos > ypersoDestination)
                            {
                                animation = false;
                            }
                    }
                movePersoDown()  

                player.y++
                logxy()
            }
        else { return }
    }
export {placePerso,moveLeft,moveRight,moveUp,moveDown}