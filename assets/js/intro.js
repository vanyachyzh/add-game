var Intro = {
    preload: function () {
        game.load.image('room', './assets/images/backgrounds/room.png');
        game.load.image('overlay', './assets/images/overlay.png');
        game.load.image('paul', './assets/images/paul.png');
        game.load.image('paulReplica', './assets/images/replicas/paul 1.png');
        game.load.image('lexyReplica', './assets/images/replicas/lexy.png');
        game.load.image('lexy', './assets/images/type of lexy/pjs big.png');

    },
    create: function () {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
        var room = this.add.sprite(0, 0, "room");
        var overlay = this.add.sprite(0, 0, "overlay");
        var paul = this.add.sprite(0, 0, "paul");
        
        var paulReplica = this.add.sprite(295, 444, "paulReplica");
        paulReplica.anchor.set(0.5, 0);
        paulReplica.width = 502.12;
        paulReplica.height = 153;

        setTimeout(() => {
            game.add.tween(paul).to({x:1000}, 300).start()
            game.add.tween(paulReplica.scale).to({x:0,y:0}, 500, Phaser.Easing.Linear.None, true).start()

            var lexy = this.add.sprite(-600, 0, "lexy");
            game.add.tween(lexy).to({x:77},300).start()

            var lexyReplica = this.add.sprite(300, 405, "lexyReplica");
            lexyReplica.width = 458;
            lexyReplica.height = 142;
            lexyReplica.anchor.set(0.5,0)
            lexyReplica.scale.setTo(0,0)
            game.add.tween(lexyReplica.scale).to({x:0.32,y:0.32}, 300, Phaser.Easing.Linear.None, true).start()

            setTimeout(() => {
                this.startGame()
            }, 1500)
        }, 1500)
    },
    startGame: function () {
        game.state.start('Tutorial');
    }
};