let canvas = document.getElementById("game");
let ctx = canvas.getContext("2d");
let frames=0;
const WIDTH = 700;
const HEIGHT=700;



const obstacle = 
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
col3:['#FF3','#A0F','#F39','#3FF'],
//col4:['#3FF','#FF3','#A0F','#F39'],
//col1:['#F39','#3FF','#FF3','#A0F'],
x: WIDTH/2,
y: 0.4*HEIGHT,
rotation_angle1:0,
rotation_angle2:0,
rotation_angle3:0,
rotation:2*Math.PI,

draw()
{
      //console.log("hi");
      if(state.current == 1){
         
        for(let i=0;i < this.position.length; i++)
        {
            let p=this.position[i];
            
           // let k=Math.floor(Math.random()*(3)) +1 ;
            
            switch(p.s)
            {
                case 1:shape1(p.x,p.y,p.r,p.rot,i);
                       //obstacle.rotation_angle1++;
                       p.rot++;
                       if(p.rot === 90)
                       {
                        p.rot=0;
                        p.vannam.unshift(p.vannam.pop());
                       }
                       break;

                case 2:shape2(p.x,p.y,p.r,p.rot,i);
                       //obstacle.rotation_angle2++;
                       p.rot++;
                       if(p.rot === 120)
                       {
                        p.rot=0;
                        p.vannam.unshift(p.vannam.pop());
                       }
                       break;
                       
                case 3:shape3(p.x,p.y,p.r,p.rot,i);
                       //obstacle.rotation_angle3++;
                       p.rot++;
                       if(p.rot === 90)
                       {
                        p.rot=0;
                        p.vannam.unshift(p.vannam.pop());
                       }
                       break;              
            }
        }

    }
},

update()
 {
       if(state.current == 1){

         //if(frames%400 == 0)
         //{
            if(this.position.length <= 1 && this.position[0].y  > ball.y)
            {
            let shp=Math.floor(Math.random()*(3)) +1 ;
            console.log(shp);
            let rad=Math.floor((Math.random() * 40) + 60);
            
            if(shp == 2)
            {
                this.position.push({
                x:WIDTH/2,
                y:ball.y-0.45*HEIGHT,
                r:rad,
                s:shp,
                rot:0,
                vannam:['#3FF','#FF3','#A0F']
            });
            }

            else
            {
            this.position.push({
                x:WIDTH/2,
                y:ball.y-0.45*HEIGHT,
                r:rad,
                s:shp,
                rot:0,
                vannam:['#F39','#3FF','#FF3','#A0F']
            });
            }

            }
         //}

         for(let i=0;i < this.position.length; i++)
         {
            let p=this.position[i];
            
            if(ball.jumped > 3)
            {
              //p.y += 35;
              
              for (const el of this.position){

                el.y +=35;

              }


              ball.jumped=0;
            }
            if(p.y-90 > ball.y)
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


function shape1(x,y,r,ang,index){
    
       
            //ctx.save();
            //ctx.translate(obstacle.x,obstacle.y);
         //console.log("hi")
         //let col=obstacle.position[index].vannam;
         for(let i=0;i<4;i++){
            var a = i*(Math.PI/2)+ (ang* Math.PI /180);
            ctx.strokeStyle = obstacle.position[index].vannam[i];
            //ctx.strokeStyle = "#3ff";
            ctx.beginPath();
            ctx.lineWidth=13;
            ctx.arc(x,y,r,a,a+Math.PI/2);
            ctx.stroke();
            ctx.closePath();
         }   
           //ctx.rotate(obstacle.rotation);
           //ctx.translate(-obstacle.x,-obstacle.y);
           //ctx.restore();
        // console.log("entered");
         
         let d=(y+r+13)-(ball.y - 8);
         //console.log(d);
         let d2=(y+r+13)-(ball.y + 8);
         if(Math.abs(d)<=3 || Math.abs(d2)<=12)
         {
               console.log("entered");
               if(ball.clr == obstacle.position[index].vannam[0])
               {
                console.log("touched");
               }
         }
        
        let d3=(y-r-13)-(ball.y - 8);
         //console.log(d);
         let d4=(y-r-13)-(ball.y + 8);
         if(Math.abs(d3)<=12 || Math.abs(d4)<=3)
         {
               console.log("entered");
               if(ball.clr == obstacle.position[index].vannam[2])
               {
                console.log("touched");
               }
         }
}



function shape2(x,y,rad,ang,index){


           /*if(obstacle.rotation_angle2 === 90){
            obstacle.rotation_angle2=0;
            obstacle.col2.unshift(obstacle.col2.pop())
            }
             
            ctx.beginPath();
            ctx.strokeStyle = obstacle.col[0];
            ctx.lineWidth=13;
            ctx.moveTo(x,y - 90);
            ctx.lineTo(x - 77.8,y + 45);
            ctx.stroke();
            ctx.closePath();
            ctx.beginPath();
            ctx.strokeStyle = obstacle.col[1];
            ctx.lineWidth=13;
            ctx.moveTo(x -77.8,y +45);
            ctx.lineTo(x + 77.8,y + 45);
            ctx.stroke();
            ctx.closePath();
            ctx.beginPath();
            ctx.strokeStyle = obstacle.col[2];
            ctx.lineWidth=13;
            ctx.moveTo(x + 77.8,y + 45);
            ctx.lineTo(x,y -90);
            ctx.stroke();
            ctx.closePath();*/

            /*if(obstacle.rotation_angle2 === 120){

            obstacle.rotation_angle2=0;
            obstacle.col2.unshift(obstacle.col2.pop())
            }*/

            //console.log("inside fun");
            let r=rad+30;
            for(let i=0;i<3;i++)
            {
                //console.log("inside loop");
                var a =(2*i*Math.PI/3) + (ang * Math.PI /180);
                ctx.beginPath();
                ctx.strokeStyle=obstacle.position[index].vannam[i];
                ctx.lineWidth=13;
                ctx.moveTo( x + r*Math.cos(a) , y+r*Math.sin(a));
                ctx.lineTo(x + r*Math.cos(a+2*Math.PI/3) , y + r*Math.sin(a+2*Math.PI/3));
                ctx.stroke();
                ctx.closePath();
            }
            let k1;

            if(obstacle.position[index].rot <= 90)
            {
            k1=Math.abs(2*Math.sin((Math.PI/3)+(obstacle.position[index].rot * Math.PI/180)));
            }
            else
            {
            k1=Math.abs(2*Math.sin((Math.PI/3)-(obstacle.position[index].rot * Math.PI/180)));    
            }
            
            let d=(y + r/k1 + 13)-(ball.y - 8);
            //console.log(d);
            let d2=(y+ r/k1 +13)-(ball.y + 8);
            if(Math.abs(d)<=3 || Math.abs(d2)<=12)
            {
               console.log("enteredtri");
               if(ball.clr == obstacle.position[index].vannam[0])
               {
                console.log("touchedtri");
               }
            }


}


function shape3(x,y,rad,ang,index){

            /*ctx.beginPath();
            ctx.strokeStyle = obstacle.col[0];
            ctx.lineWidth=13;
            ctx.moveTo(x-90,y - 90);
            ctx.lineTo(x - 90,y + 90);
            ctx.stroke();
            ctx.closePath();
            ctx.beginPath();
            ctx.strokeStyle = obstacle.col[1];
            ctx.lineWidth=13;
            ctx.moveTo(x -90,y +90);
            ctx.lineTo(x + 90,y + 90);
            ctx.stroke();
            ctx.closePath();
            ctx.beginPath();
            ctx.strokeStyle = obstacle.col[2];
            ctx.lineWidth=13;
            ctx.moveTo(x + 90,y +90);
            ctx.lineTo(x +90,y -90);
            ctx.stroke();
            ctx.closePath();
            ctx.beginPath();
            ctx.strokeStyle = obstacle.col[3];
            ctx.lineWidth=13;
            ctx.moveTo(x + 90,y -90);
            ctx.lineTo(x-90,y -90);
            ctx.stroke();
            ctx.closePath();
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
                ctx.beginPath();
                ctx.strokeStyle=obstacle.position[index].vannam[i];
                ctx.lineWidth=13;
                ctx.moveTo( x + r*Math.cos(a) , y+r*Math.sin(a));
                ctx.lineTo(x + r*Math.cos(a+Math.PI/2) , y + r*Math.sin(a+Math.PI/2));
                ctx.stroke();
                ctx.closePath();
            }

         let k2;
          k2=Math.abs(1.414*Math.sin((Math.PI/4)+(obstacle.position[index].rot * Math.PI/180)));

         let d=(y+ r/k2 +13)-(ball.y - 8);
         //console.log(d);
         let d2=(y+ r/k2 +13)-(ball.y + 8);
         if(Math.abs(d)<=7 || Math.abs(d2)<=14)
         {
               console.log("enteredsq");
               if(ball.clr == obstacle.position[index].vannam[0])
               {
                console.log("touchedsq");
               }
         }

            
}

function touching(x,y,r,g,b)
{

        var imgdata = ctx.getImageData(ball.x,ball.y,1,1);
        //console.log(imgdata.data);
        //console.log(imgdata);
        for(var i=0;i<imgdata.data.length;i+=4){
            if(!((imgdata.data[i+0]==0 && imgdata.data[i+1]==0 && imgdata.data[i+2]==0) || (imgdata.data[i+0]==r && imgdata.data[i+1]==g && imgdata.data[i+2]==b)))
            {
                console.log("touched");
                return 0;
            }
            
        }

        /*for(var i=0;i<imgdata.data.length;i+=4){
            if((imgdata.data[i+0]==255 && imgdata.data[i+1]==51 && imgdata.data[i+2]==153) || (imgdata.data[i+0]==51 && imgdata.data[i+1]==255 && imgdata.data[i+2]==255) || (imgdata.data[i+0]==255 && imgdata.data[i+1]==255 && imgdata.data[i+2]==51))
            {
                console.log("touched");
                return 0;
            }
            
        }*/

        /*for(var i=0;i<imgdata.data.length;i+=4){
            if(
                imgdata.data[i+0]==r &&
                imgdata.data[i+1]==g &&
                imgdata.data[i+2]==b
            ){
                return 1;
            }
        }*/
        //console.log("hi");
        //return 0;
}



const state = {
    current:0,
    getReady:0,
    game:1,
    over:2
}

canvas.addEventListener("click",function(event){

    switch(state.current)
    {
        case 0: state.current = 1;
                break;
       case 1: ball.move();
                break;
        case 2: end.draw();
                break;
    }             
});

const end={
    
    draw(){
        
        if(state.current==2)
        {
        ctx.font = "30px Arial";
        ctx.textAlign = "center";
        ctx.strokeStyle="#ff0000";
        ctx.strokeText("Game is Over...Reload The Page",WIDTH/2,HEIGHT/2);
        }
    }
}

const getReady={
    
    draw()
    {
        if(state.current == 0)
        {
        ctx.font = "30px Arial";
        ctx.textAlign = "center";
        ctx.strokeStyle="#ff0000";
        ctx.strokeText("Press Any Button To Start The Game",WIDTH/2,HEIGHT/2);
        }
    }
}

const ball = {

    x: WIDTH/2,
    y: 2.8*(HEIGHT/4),
    gravity : 0.1,
    rd:8,
    jump : 2.6,
    clr:"#A0F",     /////////// rgb is (170,0,255)
    speed : 0,
    jumped:0,
    maxy:0.7*HEIGHT,

draw(){
    
    if(state.current == 1)
    {
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.rd,0,Math.PI*2); 
    ctx.strokeStyle=this.clr;
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(this.x,this.y,this.rd,0,Math.PI*2); 
    ctx.fillStyle=this.clr;
    ctx.closePath();
    ctx.fill();
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
    let t=touching((WIDTH/2),y_cord,170,0,255);
    {
        if(t==0)
        {
            state.current=2;
        }
    }
},
}


function draw()
{
   ball.draw();
   getReady.draw();
   end.draw();
   obstacle.draw();
}

function update()
{
    ball.update();
    obstacle.update();
}

function gameLoop(){

ctx.clearRect(0,0,WIDTH,HEIGHT);
update();
draw();
frames++;
requestAnimationFrame(gameLoop);
}

gameLoop();