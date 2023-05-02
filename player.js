export let player = 
    {
        x: 3,
        y: 4,
        direction: "b",
        up : false,
        down : false,
        left : false,
        right : false,
        moving : false
    }

export const imagePerso = 
    [
        {direction:'h' , image:'./gfxs/perso/h.png'},
        {direction:'b' , image:'./gfxs/perso/b.png'},
        {direction:'g' , image:'./gfxs/perso/g.png'},
        {direction:'d' , image:'./gfxs/perso/d.png'}
    ]