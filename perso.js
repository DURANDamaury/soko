import { largeurTile } from "./data.js";
import { hauteurTile } from "./data.js";
import { table } from "./data.js";
import { player } from "./player.js";
import { imagePerso } from "./player.js";

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
        player.direction = 'd'
        modifyPerso()
        let xperso = player.x * largeurTile;
        const xpersoDestination = xperso+largeurTile
        const perso = document.getElementById('perso')
        let xpos=0
        function movePersoRight()
            {
                perso.style.transform = "translateX(" + xpos + "px)"
                xpos++
                requestAnimationFrame(movePersoRight)
                if (xperso + xpos === xpersoDestination)
                    {
                        console.log('debordement')
                        return
                    }
            }
        movePersoRight()
        player.x++

    }

function moveLeft()
    {
        player.direction = 'g'
        modifyPerso()
        let xperso = player.x * largeurTile;
        const xpersoDestination = xperso-largeurTile
        const perso = document.getElementById('perso')
        for (let i = xperso ; i > xpersoDestination-1 ; i--)           
            {
                perso.style.left = i + 'px'
            }
        player.x--
    }

function moveUp()
    {
        player.direction = 'h'
        modifyPerso()
        let yperso = player.y * hauteurTile;
        const ypersoDestination = yperso-hauteurTile
        const perso = document.getElementById('perso')
        for (let i = yperso ; i > ypersoDestination-1 ; i--)           
            {
                perso.style.top = i + 'px'
            }
        player.y--
    }

function moveDown()
    {
        player.direction = 'b'
        modifyPerso()
        let yperso = player.y * hauteurTile;
        const ypersoDestination = yperso+hauteurTile
        const perso = document.getElementById('perso')
        for (let i = yperso ; i < ypersoDestination+1 ; i++)           
            {
                perso.style.top = i + 'px'
            }
        player.y++
    }
export {placePerso,moveLeft,moveRight,moveUp,moveDown}