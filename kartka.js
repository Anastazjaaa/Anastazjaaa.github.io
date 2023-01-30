import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

loadSprite("tlo","tlo.png")
loadSprite("obrazek","mikolaj.png")

loadSound("muzyka","_Christmas_time_.mp3")




add([
    sprite("tlo"),
    pos(0,0)
]) 

add([
    rect(667,10),
    color(255,255,255),
    outline(5),
    pos(0,300),
    area(),
    solid()
])

const obrazek = add([sprite("obrazek"), pos(300,20),
   area(),
   body()])
     
//onUpdate(()=>{
 


//   if(obrazek.pos.x<600)   obrazek.pos.x =obrazek.pos.x +1
//   if(obrazek.pos.y<10)  obrazek.pos. y  =obrazek.pos.x -1
// })




onKeyPress('space' , ()=>{
     obrazek.jump()
     play("muzyka")

})

 onTouchStart((id, pos)=>{
    obrazek.jump()
    play("muzyka")
 }) 