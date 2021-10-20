class Player{

    constructor(){

this.index = null
this.rank = null
this.name = null
this.distanceX = 200
this.distanceY = 200


    }
    

getCount(){

    var playerCountref =  database.ref("playerCount")
    playerCountref.on("value" , (data)=>{
        playerCount = data.val();
    })


}

updateOb()
{
  database.ref('/').update({
    ob1:1,
    ob2:1,
    ob3:1,
    ob4:1,
    ob5:1
  })
}
updateCount(count){
   database.ref("/").update({

        playerCount : count,
        finishedPlayer: 0

    })

}

update(){

var plyindx = "players/player" + this.index
//console.log(plyindx)

database.ref(plyindx).update({
    name:this.name,
    distanceX:this.distanceX,
    distanceY:this.distanceY,

})
// update creates a node and inserts 

}

static getPlayerInfo(){
var refer = database.ref("players")
refer.on("value" , (data)=>{

allPlayers = data.val();

})
}
// can call with the name of class not attached to the object
getFinishedPlayers()
{
var finish = database.ref("finishedPlayer")
    finish.on("value" , (data)=>{

this.rank = data.val();

    })

}
static updateFinishedPlayers(count)
{
database.ref("/").update({

finishedPlayer : count
    
})
    
}

}

