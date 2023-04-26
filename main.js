import { moveLeft, moveRight, moveUp, moveDown } from "./perso.js";
import { largeurTile } from "./data.js";
import { hauteurTile } from "./data.js";
import { table } from "./data.js";
import { player } from "./player.js";

function main ()
    {
        function keyDownHandler(e) 
            {
                if(e.key == "Right" || e.key == "ArrowRight"){moveRight()}
                else if(e.key == "Left" || e.key == "ArrowLeft"){moveLeft()}
                else if(e.key == "Up" || e.key == "ArrowUp"){moveUp()}
                else if(e.key == "Down" || e.key == "ArrowDown"){moveDown()}
            }
        
        function keyUpHandler(e) 
            {
                if(e.key == "Right" || e.key == "ArrowRight"){player.right = false;}
                else if(e.key == "Left" || e.key == "ArrowLeft"){player.left = false;}
                else if(e.key == "Up" || e.key == "ArrowUp"){player.up = false;}
                else if(e.key == "Down" || e.key == "ArrowDown"){player.down = false;}
            }

        document.addEventListener("keydown", keyDownHandler, false);
        //document.addEventListener("keyup", keyUpHandler, false);

        
    }

export {main}