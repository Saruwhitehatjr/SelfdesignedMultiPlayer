class Game {
    constructor(){

    }
    
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
     
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }

   
    
   async start(){
      if(gameState === 0){
          
        player = new Player();
        var playerCountRef= await database.ref('playerCount').once("value")
        if(playerCountRef.exists ()){
          playerCount=playerCountRef.val();
          player.getCount();
        }
        
        form = new Form()
        form.display();
        player.updateOb()
      }
  
      Ron1=createSprite(200,200 , 20 , 20)
        //car1.addImage(car1Img)
      Ron2=createSprite(200,200 , 20 , 20)
      ronsGroup.add(Ron1)
      ronsGroup.add(Ron2)
      bg();    

      rons = [Ron1 , Ron2]

      ob1=createSprite(400,100,20,20)
      ob1.shapeColor="red"
      ob2=createSprite(600,250,20,20)
      ob2.shapeColor="red"
      ob3=createSprite(800,300,20,20)
      ob3.shapeColor="red"
      ob4=createSprite(1000,400,20,20)
      ob4.shapeColor="red"
      ob5=createSprite(400,500,20,20)
      ob5.shapeColor="red"
      obst.add(ob1)
      obst.add(ob2)
      obst.add(ob3)
      obst.add(ob4)
      obst.add(ob5)
     // [ob1,ob2,ob3,ob4,ob5]
     
      

    }
  
    play(){
      form.hideForm();
     

        
      //text ("GAME STARTED" , width/2 , height/2);
      Player.getPlayerInfo();
      player.getFinishedPlayers();
     
      
      if(allPlayers !== undefined){
        //background ("red")
        //image (trackImg,0,-displayHeight*4,displayWidth,displayHeight*5)
          var yPosition = 0
          var xPosition = 0
          var x = 0
          var test
         
          index = 0
          
          
        for(var plr in allPlayers){
          index=index+1
          x=x+200;
        //y= displayHeight-allPlayers[plr].distance
            xPosition = x+allPlayers[plr].distanceX
            yPosition = -20+allPlayers[plr].distanceY
            

            rons[index-1].x=xPosition;
            rons[index-1].y=yPosition;

           

        }
      }
      ronsGroup.overlap(obst,function(ro,ob){
        ob.remove()
       if(ro===Ron1)
       {
         player1_score+=1
       }
       if(ro===Ron2)
       {
         player2_score+=1
       }
   
      })
  
     
      if(keyIsDown(LEFT_ARROW )){  /*and it should not be colliding with the bg sprites*/
        //dir = 180        
        player.distanceX -= 1
        player.update();
      }
    else if(keyIsDown(RIGHT_ARROW)){
      //dir = 0
      player.distanceX += 1
        player.update();
    }
    else if(keyIsDown(UP_ARROW)){
      //dir = -90
      player.distanceY -= 1
        player.update();
    }
    else if(keyIsDown(DOWN_ARROW)){
     // dir = 90
      player.distanceY += 1
        player.update();
    }

      
   
  

   drawSprites();
   text ("PLAYER1 SCORE"+player1_score,100,20)
   text ("PLAYER2 SCORE"+player2_score,100,40)
    
  }




}
