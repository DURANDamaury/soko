import { movePerso } from "./perso.js";

function main (largeurTile,hauteurTile,table)
    {
        console.log('test')
        //on lance la boucle principale
        let gameState = "on"

        var up = false;
        var down = false;
        var left = false;
        var right = false;

        function keyDownHandler(e) 
            {
                if(e.key == "Right" || e.key == "ArrowRight"){right = true;}
                else if(e.key == "Left" || e.key == "ArrowLeft"){left = true;}
                else if(e.key == "Up" || e.key == "ArrowUp"){up = true;}
                else if(e.key == "Down" || e.key == "ArrowDown"){down = true;}
            }
        
        function keyUpHandler(e) 
            {
                if(e.key == "Right" || e.key == "ArrowRight"){right = false;}
                else if(e.key == "Left" || e.key == "ArrowLeft"){left = false;}
                else if(e.key == "Up" || e.key == "ArrowUp"){up = false;}
                else if(e.key == "Down" || e.key == "ArrowDown"){down = false;}
            }

        document.addEventListener("keydown", keyDownHandler, false);
        document.addEventListener("keyup", keyUpHandler, false);
        console.log(up)
        setInterval( movePerso(up,down,left,right) , 10);
    }

export {main}