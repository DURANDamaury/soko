import { movePerso } from "./perso.js";
import { largeurTile } from "./data.js";
import { hauteurTile } from "./data.js";
import { table } from "./data.js";
import { player } from "./player.js";

function main ()
    {
        function keyDownHandler(e) 
            {
                if(e.key == "Right" || e.key == "ArrowRight"){player.right = true;}
                else if(e.key == "Left" || e.key == "ArrowLeft"){player.left = true;}
                else if(e.key == "Up" || e.key == "ArrowUp"){player.up = true;}
                else if(e.key == "Down" || e.key == "ArrowDown"){player.down = true;}
            }
        
        function keyUpHandler(e) 
            {
                if(e.key == "Right" || e.key == "ArrowRight"){player.right = false;}
                else if(e.key == "Left" || e.key == "ArrowLeft"){player.left = false;}
                else if(e.key == "Up" || e.key == "ArrowUp"){player.up = false;}
                else if(e.key == "Down" || e.key == "ArrowDown"){player.down = false;}
            }

        document.addEventListener("keydown", keyDownHandler, false);

        document.addEventListener("keyup", keyUpHandler, false);
        setInterval( movePerso() , 10);
    }

export {main}