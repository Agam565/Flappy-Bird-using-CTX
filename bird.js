const dragonSprite = new Image();
dragonSprite.src = "dragon.png";
class Bird{
    constructor(){
    this.x = 150;
    this.y = 200;
    this.velocityY = 0;
    this.originalWidth = 941;
    this.originalHeight = 680
    this.width = this.originalWidth/20
    this.height = this.originalHeight/20;
    this.weight = 1;
    this.frameX = 0;
    }
    update(){ 
        let curve = Math.sin(angle) * 20
   if(this.y > canvas.height - (this.height * 3) + curve){
    this.y = canvas.height - (this.height * 3)+ curve
    this.velocityY = 0;
   }
   else{
    this.velocityY += this.weight;
    this.velocityY *= 0.9;
    this.y += this.velocityY;
   }
   if(this.y < 0 + this.height){
    this.y = 0 + this.height;
   }
   if(spacePressed && this.y> this.height*3)this.flap();
    }
draw(){
ctx.fillStyle = "red";
//ctx.fillRect(this.x,this.y,this.width,this.height);
ctx.drawImage(dragonSprite,this.frameX * this.originalWidth,0,this.originalWidth,this.originalHeight,this.x - 20,this.y - 12,this.width *1.7,this.height * 1.7);
}
flap(){
this.velocityY -=2;
if(this.frameX>= 3){
    this.frameX = 0;
}
else if(frame%2 === 0){
    this.frameX++;
}
}
}
const bird = new Bird();