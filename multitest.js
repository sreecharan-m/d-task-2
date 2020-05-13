let canvas2 = document.getElementById("game2");
let ctx2 = canvas2.getContext("2d");
let framesm=0;
let togglem=0;
//let cchange=0;
let ballchangem=['#FF3','#A0F'];
////////////////////////load sounds////////////////////////



const spritem = new Image();
spritem.src = "images/sprite.png";
///////////////////////////////////////////////

const bcchangem =
{
position:[],
f:0,
draw()
{
    if(statem.current ==1)
    {
       if(this.position.length == 1)
       {
            for(let j=0;j<4;j++){
            var a = j*(Math.PI/2);
            ctx2.fillStyle = obstaclem.col2[j];
            //ctx2.strokeStyle = "#3ff";
            ctx2.beginPath();
            //ctx2.lineWidth=13;
            ctx2.arc(this.position[0].x,this.position[0].y,12,a,a+Math.PI/2);
            ctx2.lineTo(this.position[0].x,this.position[0].y);
            ctx2.fill();
            ctx2.closePath();
         }
       }
    }
},

update()
{
    if(statem.current == 1)
    {
    if(framesm%1000 == 0)
    {
    if(this.position.length <=1)
    {
        this.position.push({
            x:WIDTH/2,
            y:0.1*HEIGHT
        })
    }
    }

    if(this.position.length == 1)
    {
        this.position[0].y += 1;
        if(this.position[0].y >= ballm.y)
        {
            this.position.shift();
            //this.state = 1;
            //this.f=frames;
            if(ballm.clr == ballchangem[0])
            {
                ballm.clr = ballchangem[1];
            }
            else
            {
                ballm.clr = ballchangem[0];
            }
        }
    }
    }
}
}





const powerupm = 
{
position:[],
state:0,
f:0,
p:600,
draw(){

    if(statem.current ==1)
    {
       if(this.position.length == 1)
       ctx2.drawImage(spritem,this.position[0].x - 8, this.position[0].y,20,20);
    }
},
update()
{
    if(statem.current ==1)
    {
    
    if(framesm%2500 == 0)
    {
    if(this.position.length <=1)
    {
        this.position.push({
            x:WIDTH/2,
            y:0.1*HEIGHT
        })
    }
    }

    if(this.position.length == 1)
    {
        this.position[0].y += 1;
        if(this.position[0].y >= ballm.y)
        {
            this.position.shift();
            this.state = 1;
            this.f=framesm;
        }
    }


    if(framesm >= this.f + 600)
    {
      this.f = 0;
      this.state = 0;
      this.p=600;
    }

    if(this.state == 1)
    {
         
            let k=Math.floor(this.p/60);

            ctx2.beginPath();
            ctx2.lineWidth = 1.5;
            ctx2.font = "26px Teko";
            //ctx2.fillText("Power", 550, 550);
            ctx2.strokeText("power", 620, 550);
            ctx2.closePath();

            ctx2.beginPath();
            ctx2.lineWidth = 1.5;
            ctx2.font = "18px Teko";
            ctx2.fillText(k, 620, 585);
            ctx2.strokeText(k,620, 585);
            ctx2.closePath();
            this.p --;
    }
    
    }
}

}

const obstaclem = 
{

position:[{
                x:WIDTH/2,
                y:0.4*HEIGHT,
                r:90,
                s:1,
                rot:0,
                vannam:['#F39','#3FF','#FF3','#A0F'] 
            }],
col:['#F39','#3FF','#FF3','#A0F'],        
col2:['#A0F','#F39','#3FF','#FF3'],
col3:['#66ff66','#996633','#0000ff'],
//col4:['#3FF','#FF3','#A0F','#F39'],
//col1:['#F39','#3FF','#FF3','#A0F'],
x: WIDTH/2,
y: 0.4*HEIGHT,
rotation_angle1:0,
rotation_angle2:0,
rotation_angle3:0,
rotation:2*Math.PI,
dx:2,

draw()
{
      //console.log("hi");
      if(statem.current == 1){
         
        for(let i=0;i < this.position.length; i++)
        {
            let p=this.position[i];
            
           // let k=Math.floor(Math.random()*(3)) +1 ;
            
            switch(p.s)
            {
                case 1:shape1m(p.x,p.y,p.r,p.rot,i);
                       //obstacle.rotation_angle1++;
                       p.rot++;
                       if(p.rot === 90)
                       {
                        p.rot=0;
                        p.vannam.unshift(p.vannam.pop());
                       }
                       break;

                case 2:shape2m(p.x,p.y,p.r,p.rot,i);
                       //obstacle.rotation_angle2++;
                       p.rot++;
                       if(p.rot === 120)
                       {
                        p.rot=0;
                        p.vannam.unshift(p.vannam.pop());
                       }
                       break;
                       
                case 3:shape3m(p.x,p.y,p.r,p.rot,i);
                       //obstacle.rotation_angle3++;
                       p.rot++;
                       if(p.rot === 90)
                       {
                        p.rot=0;
                        p.vannam.unshift(p.vannam.pop());
                       }
                       break;
                case 4:shape4m(p.x,p.y,p.r,p.rot,i);
                       //obstacle.rotation_angle3++;
                       //p.rot++;
                       //if(p.rot === 90)
                       //{
                        //p.rot=0;
                        //p.vannam.unshift(p.vannam.pop());
                       //}
                       break;                         
            }
        }

    }
},

update()
 {
       if(statem.current == 1){

         //if(frames%400 == 0)
         //{
            if(this.position.length <= 1 && this.position[0].y  > ballm.y)
            {
            let shp=Math.floor(Math.random()*(4)) +1 ;
            //let shp=4;
            console.log(shp);
            let rad=Math.floor((Math.random() * 40) + 60);
            
            if(shp == 2)
            {
                this.position.push({
                x:WIDTH/2,
                y:ballm.y-0.45*HEIGHT,
                r:rad,
                s:shp,
                rot:0,
                vannam:['#A0F','#3FF','#FF3']
            });
            }
            else if(shp == 4)
            {
               let c=Math.floor(Math.random()*(3)) ;
               this.position.push({
                x:WIDTH/2,
                y:ballm.y-0.45*HEIGHT,
                r:rad,
                s:shp,
                rot:0,
                vannam:obstacle.col3[c]
            });

            }
            else
            {
            this.position.push({
                x:WIDTH/2,
                y:ballm.y-0.45*HEIGHT,
                r:rad,
                s:shp,
                rot:0,
                vannam:['#F39','#3FF','#FF3','#A0F']
            });
            }
            pointsound.play();
            scorem.scr++;
            scorem.bestm=Math.max(scorem.scr,scorem.bestm);
            localStorage.setItem("bestm",scorem.bestm);
            }
         //}

         for(let i=0;i < this.position.length; i++)
         {
            let p=this.position[i];
            
            if(ballm.jumped > 3)
            {
              //p.y += 35;
              
              for (const el of this.position){

                el.y +=35;

              }


              ballm.jumped=0;
            }
            if(p.y-90 > ballm.y)
            {
                p.y +=3 ;
            }
            if(p.y >= HEIGHT)
            {
                this.position.shift();
            }
         }
       }
 }
}


function shape1m(x,y,r,ang,index){
    
       
            //ctx2.save();
            //ctx2.translate(obstacle.x,obstacle.y);
         //console.log("hi")
         //let col=obstacle.position[index].vannam;
         
         for(let j=0;j<4;j++){
            var a = j*(Math.PI/2);
            ctx2.fillStyle = obstaclem.col2[j];
            //ctx2.strokeStyle = "#3ff";
            ctx2.beginPath();
            //ctx2.lineWidth=13;
            ctx2.arc(x,y,8,a,a+Math.PI/2);
            ctx2.fill();
            ctx2.closePath();
         }


         for(let i=0;i<4;i++){
            var a = i*(Math.PI/2)+ (ang* Math.PI /180);
            ctx2.strokeStyle = obstaclem.position[index].vannam[i];
            //ctx2.strokeStyle = "#3ff";
            ctx2.beginPath();
            ctx2.lineWidth=13;
            ctx2.arc(x,y,r,a,a+Math.PI/2);
            ctx2.stroke();
            ctx2.closePath();
         }   
           //ctx2.rotate(obstacle.rotation);
           //ctx2.translate(-obstacle.x,-obstacle.y);
           //ctx2.restore();
        // console.log("entered");
         
         let d=(y+r+13)-(ballm.y - 8);
         //console.log(d);
         let d2=(y+r+13)-(ballm.y + 8);
         if(Math.abs(d)<=3 || Math.abs(d2)<=12)
         {
               //console.log("entered");
               if(!(ballm.clr == obstaclem.position[index].vannam[0]))
               {
                //console.log("touched");
                if(powerupm.state == 0)
                {console.log("gameover");
                 hit.play();
                }
               }
         }
        
        let d3=(y-r-13)-(ballm.y - 8);
         //console.log(d);
         let d4=(y-r-13)-(ballm.y + 8);
         if(Math.abs(d3)<=12 || Math.abs(d4)<=3)
         {
               //console.log("entered");
               if(!(ballm.clr == obstaclem.position[index].vannam[2]))
               {
                //console.log("touched");
                if(powerupm.state == 0)
                 {console.log("gameover");
                  hit.play();
                 }
               }
         }
}



function shape2m(x,y,rad,ang,index){


           /*if(obstacle.rotation_angle2 === 90){
            obstacle.rotation_angle2=0;
            obstacle.col2.unshift(obstacle.col2.pop())
            }
             
            ctx2.beginPath();
            ctx2.strokeStyle = obstacle.col[0];
            ctx2.lineWidth=13;
            ctx2.moveTo(x,y - 90);
            ctx2.lineTo(x - 77.8,y + 45);
            ctx2.stroke();
            ctx2.closePath();
            ctx2.beginPath();
            ctx2.strokeStyle = obstacle.col[1];
            ctx2.lineWidth=13;
            ctx2.moveTo(x -77.8,y +45);
            ctx2.lineTo(x + 77.8,y + 45);
            ctx2.stroke();
            ctx2.closePath();
            ctx2.beginPath();
            ctx2.strokeStyle = obstacle.col[2];
            ctx2.lineWidth=13;
            ctx2.moveTo(x + 77.8,y + 45);
            ctx2.lineTo(x,y -90);
            ctx2.stroke();
            ctx2.closePath();*/

            /*if(obstacle.rotation_angle2 === 120){

            obstacle.rotation_angle2=0;
            obstacle.col2.unshift(obstacle.col2.pop())
            }*/

            //console.log("inside fun");
            

            for(let j=0;j<4;j++){
            var a = j*(Math.PI/2);
            ctx2.fillStyle = obstaclem.col2[j];
            //ctx2.strokeStyle = "#3ff";
            ctx2.beginPath();
            //ctx2.lineWidth=13;
            ctx2.arc(x,y,8,a,a+Math.PI/2);
            ctx2.fill();
            ctx2.closePath();
           }

            let r=rad+10;
            for(let i=0;i<3;i++)
            {
                //console.log("inside loop");
                var a =(2*i*Math.PI/3) + (ang * Math.PI /180);
                ctx2.beginPath();
                ctx2.strokeStyle=obstaclem.position[index].vannam[i];
                ctx2.lineWidth=13;
                ctx2.moveTo( x + r*Math.cos(a) , y+r*Math.sin(a));
                ctx2.lineTo(x + r*Math.cos(a+2*Math.PI/3) , y + r*Math.sin(a+2*Math.PI/3));
                ctx2.stroke();
                ctx2.closePath();
            }
            let k1;

            if(obstaclem.position[index].rot <= 90)
            {
            k1=Math.abs(2*Math.sin((Math.PI/3)+(obstaclem.position[index].rot * Math.PI/180)));
            }
            else
            {
            k1=Math.abs(2*Math.sin((Math.PI/3)-(obstaclem.position[index].rot * Math.PI/180)));    
            }
            
            let d=(y + r/k1 + 13)-(ballm.y - 8);
            //console.log(d);
            let d2=(y+ r/k1 +13)-(ballm.y + 8);
            if(Math.abs(d)<=8 || Math.abs(d2)<=18)
            {
               //console.log("enteredtri");
               if(obstaclem.position[index].rot <= 120  && obstaclem.position[index].rot >= 60)
               {
                if(!((ballm.clr == obstaclem.position[index].vannam[0]) || (ballm.clr == obstaclem.position[index].vannam[2])))
               {
                //console.log("touchedtri");
                 if(powerupm.state == 0)
                 {console.log("gameover");
                  hit.play();
                 }
               }
               }
               else
               {
                if(!(ballm.clr == obstaclem.position[index].vannam[0]))
               {
                //console.log("touchedtri");
                if(powerupm.state == 0)
                {console.log("gameover");
                 hit.play();
                }
               }

               }
            }
            




            let k3;
            if(obstaclem.position[index].rot <= 30)
            {
            k3=Math.abs(2*Math.sin((obstaclem.position[index].rot * Math.PI/180)));
            }
            else
            {
            k3=Math.abs(2*Math.sin((2*Math.PI/3)-(obstaclem.position[index].rot * Math.PI/180)));    
            }
            


            let d3=(y - r/k3 - 13)-(ballm.y - 8);
            //console.log(d);
            let d4=(y - r/k3 - 13)-(ballm.y + 8);
            if(Math.abs(d3)<=18 || Math.abs(d4)<=8)
            {
               //console.log("enteredtri");
               
               if(obstaclem.position[index].rot <= 120  && obstaclem.position[index].rot >= 90)
               {
                if(!((ballm.clr == obstaclem.position[index].vannam[1]) || (ballm.clr == obstaclem.position[index].vannam[2])))
               {
                //console.log("touchedtri");
                if(powerupm.state == 0)
                {console.log("gameover");
                hit.play();
                }
               }
               }
               else
               {
                if(!(ballm.clr == obstaclem.position[index].vannam[1]))
               {
                //console.log("touchedtri");
                if(powerupm.state == 0)
                {console.log("gameover");
                 hit.play();
                }
               }
               }
            }


}


function shape3m(x,y,rad,ang,index){

            /*ctx2.beginPath();
            ctx2.strokeStyle = obstacle.col[0];
            ctx2.lineWidth=13;
            ctx2.moveTo(x-90,y - 90);
            ctx2.lineTo(x - 90,y + 90);
            ctx2.stroke();
            ctx2.closePath();
            ctx2.beginPath();
            ctx2.strokeStyle = obstacle.col[1];
            ctx2.lineWidth=13;
            ctx2.moveTo(x -90,y +90);
            ctx2.lineTo(x + 90,y + 90);
            ctx2.stroke();
            ctx2.closePath();
            ctx2.beginPath();
            ctx2.strokeStyle = obstacle.col[2];
            ctx2.lineWidth=13;
            ctx2.moveTo(x + 90,y +90);
            ctx2.lineTo(x +90,y -90);
            ctx2.stroke();
            ctx2.closePath();
            ctx2.beginPath();
            ctx2.strokeStyle = obstacle.col[3];
            ctx2.lineWidth=13;
            ctx2.moveTo(x + 90,y -90);
            ctx2.lineTo(x-90,y -90);
            ctx2.stroke();
            ctx2.closePath();
            //console.log("hi");*/

            /* if(obstacle.rotation_angle3 === 90){

            obstacle.rotation_angle3=0;
            obstacle.col3.unshift(obstacle.col3.pop())
            }*/

            //console.log("inside fun");
            let r=rad+30;
            for(let i=0;i<4;i++)
            {
                //console.log("inside loop");
                var a =(i*Math.PI/2) + (ang * Math.PI /180);
                ctx2.beginPath();
                ctx2.strokeStyle=obstaclem.position[index].vannam[i];
                ctx2.lineWidth=13;
                ctx2.moveTo( x + r*Math.cos(a) , y+r*Math.sin(a));
                ctx2.lineTo(x + r*Math.cos(a+Math.PI/2) , y + r*Math.sin(a+Math.PI/2));
                ctx2.stroke();
                ctx2.closePath();
            }

         

            for(let j=0;j<4;j++){
            var a = j*(Math.PI/2);
            ctx2.fillStyle = obstaclem.col2[j];
            //ctx2.strokeStyle = "#3ff";
            ctx2.beginPath();
            //ctx2.lineWidth=13;
            ctx2.arc(x,y,8,a,a+Math.PI/2);
            ctx2.fill();
            ctx2.closePath();
            }


         let k2;
          k2=Math.abs(1.414*Math.sin((Math.PI/4)+(obstaclem.position[index].rot * Math.PI/180)));

         let d=(y+ r/k2 +13)-(ballm.y - 8);
         //console.log(d);
         let d2=(y+ r/k2 +13)-(ballm.y + 8);
         if(Math.abs(d)<=7 || Math.abs(d2)<=14)
         {
               //console.log("enteredsq");
               if(!(ballm.clr == obstaclem.position[index].vannam[0]))
               {
                //console.log("touchedsq");
                if(powerupm.state == 0)
                {console.log("gameover");
                 hit.play();
                }
               }
         }

         let d3=(y- r/k2 -13)-(ballm.y - 8);
         //console.log(d);
         let d4=(y- r/k2 -13)-(ballm.y + 8);

          if(Math.abs(d3)<=14 || Math.abs(d4)<=7)
         {
               //console.log("enteredsq");
               if(!(ballm.clr == obstaclem.position[index].vannam[2]))
               {
                //console.log("touchedsq");
                if(powerupm.state == 0)
                 {console.log("gameover");
                  hit.play();
                 }
               }
         }  
}

function shape4m(x,y,rad,ang,index)
{

       
       for(let j=0;j<4;j++){
            var a = j*(Math.PI/2);
            ctx2.fillStyle = obstaclem.col2[j];
            //ctx2.strokeStyle = "#3ff";
            ctx2.beginPath();
            //ctx2.lineWidth=5;
            ctx2.arc(WIDTH/2,y,8,a,a+Math.PI/2);
            ctx2.fill();
            ctx2.closePath();
         }

       let ele=obstaclem.position[index];
       
       ctx2.beginPath();
       ctx2.strokeStyle =ele.vannam;
       ctx2.lineWidth=13;
       ctx2.moveTo(x,y - 60);
       ctx2.lineTo(x ,y + 60);
       ctx2.stroke();
       ctx2.closePath();

       ctx2.beginPath();
       ctx2.strokeStyle =ele.vannam;
       ctx2.lineWidth=13;
       ctx2.moveTo(x+40,y - 60);
       ctx2.lineTo(x+40,y + 60);
       ctx2.stroke();
       ctx2.closePath();

       ele.x += obstaclem.dx;
       if(ele.x >= 0.65*WIDTH)
       {
        obstaclem.dx = -2;
       }

       if(ele.x <= 0.35*WIDTH)
       {
        obstaclem.dx= 2;
       }

       if(((ballm.x == ele.x) || (ballm.x == ele.x + 40)) && ((ballm.y >= ele.y-60) && (ballm.y <= ele.y+60)))
       {
        if(powerupm.state == 0)
        {
            console.log("touched moving grid");
            hit.play();
        }
       }

}


const statem = {
    current:0,
    getReady:0,
    game:1,
    over:2
}

document.addEventListener("keydown",function(event){

var key=event.keyCode;
console.log(key);
if(key == 87)
   {
    switch(statem.current)
   {
        case 0: statem.current = 1;
                break;
       case 1: ballm.move();
                break;
        case 3: endm.draw();
                break;
    } 
   }
else if (key == 32)
{
    if(togglem == 0)
    {
        statem.current=2;
        pausedm.draw();
        togglem=1;
    }
    else
    {
        togglem=0;
        statem.current=1;
    }
}               

});




const endm={
    
    draw(){
        
        if(statem.current==3)
        {
        ctx2.font = "30px Arial";
        ctx2.textAlign = "center";
        ctx2.strokeStyle="#ff0000";
        ctx2.strokeText("Game is Over...Reload The Page",WIDTH/2,HEIGHT/2);
        }
    }
}

const getReadym={
    
    draw()
    {
        if(statem.current == 0)
        {
        ctx2.font = "30px Arial";
        ctx2.textAlign = "center";
        ctx2.strokeStyle="#ff0000";
        ctx2.strokeText("Press Any Button To Start The Game",WIDTH/2,HEIGHT/2);
        }
    }
}

const pausedm={

    draw()
    {
        if(statem.current == 2)
        {
            ctx2.font = "30px Arial";
        ctx2.textAlign = "center";
        ctx2.strokeStyle="#ff0000";
        ctx2.strokeText("Game Paused...spacebar to continue",WIDTH/2,HEIGHT/2);
        }
    }
}

const ballm = {

    x: WIDTH/2,
    y: 2.8*(HEIGHT/4),
    gravity : 0.1,
    rd:12,
    jump : 2.6,
    clr:ballchangem[0],     /////////// rgb is (170,0,255)
    speed : 0,
    jumped:0,
    maxy:0.7*HEIGHT,

draw(){
    
    if(statem.current == 1)
    {
    ctx2.beginPath();
    ctx2.arc(this.x,this.y,this.rd,0,Math.PI*2); 
    ctx2.strokeStyle=this.clr;
    ctx2.closePath();
    ctx2.stroke();

    ctx2.beginPath();
    ctx2.arc(this.x,this.y,this.rd,0,Math.PI*2); 
    ctx2.fillStyle=this.clr;
    ctx2.closePath();
    ctx2.fill();
    }
},

move()
{
    this.speed = -this.jump;
    this.jumped += this.jump;
   
},
update()
{
   this.speed += this.gravity;
   this.y += this.speed;
   if(this.y >= 0.85*HEIGHT)
   {
    //state.current=2;
    this.y=0.85*HEIGHT;
   }

    if(this.maxy > this.y)
    {
      this.maxy = this.y;
    }
    
    let y_cord=this.y;
    /*let t=touching((WIDTH/2),y_cord,170,0,255);
    {
        if(t==0)
        {
            state.current=2;
        }
    }*/
},
}

const scorem =
{
    scr:0,
    bestm:parseInt(localStorage.getItem("bestm")) || 0,

    draw()
    {
        if(statem.current==1)
        {
            /*ctx2.beginPath();
            ctx2.font = "40px Arial";
            ctx2.lineWidth=2;
            //ctx2.textAlign = "center";
            ctx2.strokeStyle="#ff0000";
            //ctx2.fillText(this.scr,30,50);
            ctx2.strokeText("score",100,200);
            ctx2.closePath();*/
            ctx2.beginPath();
            ctx2.lineWidth = 1.5;
            ctx2.font = "40px Teko";
            ctx2.fillText("score", 80, 50);
            ctx2.strokeText("score", 80, 50);
            ctx2.closePath();

            ctx2.beginPath();
            ctx2.lineWidth = 1.5;
            ctx2.font = "30px Teko";
            ctx2.fillText(this.scr, 80, 80);
            ctx2.strokeText(this.scr, 80, 80);
            ctx2.closePath();

            ctx2.beginPath();
            ctx2.lineWidth = 1.5;
            ctx2.font = "40px Teko";
            ctx2.fillText("Best score", 580, 50);
            ctx2.strokeText("Best score", 580, 50);
            ctx2.closePath();

            ctx2.beginPath();
            ctx2.lineWidth = 1.5;
            ctx2.font = "30px Teko";
            ctx2.fillText(this.bestm, 580, 80);
            ctx2.strokeText(this.bestm,580, 80);
            ctx2.closePath();
        }
    }
}


function drawm()
{
   ballm.draw();
   getReadym.draw();
   endm.draw();
   obstaclem.draw();
   scorem.draw();
   pausedm.draw();
   powerupm.draw();
   bcchangem.draw();
}

function updatem()
{
    ballm.update();
    powerupm.update();
    obstaclem.update();
    bcchangem.update();
}

function gameLoopm(){

ctx2.clearRect(0,0,WIDTH,HEIGHT);
framesm++;
updatem();
drawm();
console.log(frames);
requestAnimationFrame(gameLoopm);
}

gameLoopm();