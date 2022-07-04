var Tutorial = {
    preload: function ()
    {
        game.load.image('room', room);
        game.load.image('overlay', './assets/images/overlay.png');
        game.load.image('lexy2', pjsEmbaressed);
        game.load.image('taskDress', taskDress);
        game.load.image('dress', optionDress);
        game.load.image('shorts', optionShorts);
        game.load.image('lexy', pjsBig);
        game.load.image('hand', './assets/images/hint pointer.png');
    },
    create: function ()
    {
        var room = this.add.sprite(0, 0, "room");

        var taskDress = this.add.sprite(63, -50, "taskDress");
        game.add.tween(taskDress).to({x:63, y:10}, 300).start()

        var overlay = this.add.sprite(300, 450, "overlay");
        overlay.anchor.set(0.5,0.5)
        game.add.tween(overlay).to({alpha: 0}, 1500, Phaser.Easing.Linear.None, true);

        var lexy = this.add.sprite(300, 450, "lexy");
        lexy.anchor.set(0.5,0.5)
        game.add.tween(lexy.scale).to({x:0.83,y:0.83}, 300, Phaser.Easing.Linear.None, true).start()
        game.add.tween(lexy).to({x:294, y:427}, 300).start()

        setTimeout(()=>{
            var lexy2 = this.add.sprite(106, 31, "lexy2");


            var dress =game.add.button(165, 703, 'dress', this.press, this);

            dress.anchor.set(0.5, 0.5);
            dress.width = 250;
            dress.height = 276;
            dress.scale.setTo(0,0)
            game.add.tween(dress.scale).to({x:0.5,y:0.5}, 300, Phaser.Easing.Linear.None, true).start()
        },300)

        setTimeout(()=>{
            var shorts = game.add.button(435, 703, 'shorts', this.press, this);
            shorts.anchor.set(0.5, 0.5);
            shorts.width = 250;
            shorts.height = 276;
            shorts.scale.setTo(0,0)
            game.add.tween(shorts.scale).to({x:0.5,y:0.5}, 300, Phaser.Easing.Linear.None, true).start()
        },400)

        setTimeout(()=>{
            var hand = this.add.sprite(128,959,"hand")
            game.add.tween(hand).to({y:659}, 800).to({x:400}, 800).to({x:100}, 800).start()
            setTimeout(() => {
                game.add.tween(hand).to({y:1000}, 800).start()
            }, 2600);
        },1200)

    },
    press: function (e){
        game.add.tween(e.scale).to({x:0.48,y:0.48}, 150, Phaser.Easing.Linear.None, true).start()
        if(e.key=="dress"){
            setTimeout(()=>{
                game.state.start('Dress')
            },400);
        }else if(e.key=="shorts"){
            setTimeout(()=>{
                game.state.start('Shorts')
            },400)
        }
    }

}