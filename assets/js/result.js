class Result {
    constructor(background, lexy){
        this.lexy = lexy,
        this.background = background
    }
    preload(){
       game.load.image("background", this.background)
       game.load.image("lexy", this.lexy)
       game.load.image("paul", "./assets/images/paul final.png")
       game.load.image("button", "./assets/images/button.png") 
       game.load.image("replica", "./assets/images/replicas/paul 2.png") 
    }
    create(){
        this.add.sprite(0,0, "background")
        this.add.sprite(98,0, "paul")
        this.add.sprite(0,57, "lexy")
        var button = this.add.sprite(286,806, "button")
        button.anchor.set(0.5, 0.5);
        button.width = 371;
        button.height = 76;
        button.scale.setTo(0,0)
        var replica = this.add.sprite(300.5,370, "replica")
        replica.anchor.set(0.5, 0);
        replica.width = 463;
        replica.height = 141;
        replica.scale.setTo(0,0)
        game.add.tween(replica.scale).to({x:0.5,y:0.5}, 300, Phaser.Easing.Linear.None, true).start()

        setTimeout(()=>{
            game.add.tween(replica.scale).to({x:0,y:0}, 300, Phaser.Easing.Linear.None, true).start()
            game.add.tween(button.scale).to({x:1,y:1}, 300, Phaser.Easing.Linear.None, true).start()
        },2000)


    }
}


