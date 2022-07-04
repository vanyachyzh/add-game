class Template {
    constructor(background, lexy, statusBar, task, option1, option2, nextStep1, nextStep2) {
        this.background = background,
            this.task = task,
            this.option1 = option1,
            this.option2 = option2,
            this.lexy = lexy,
            this.statusBar = statusBar,
            this.hand = './assets/images/hint pointer.png',
            this.nextStep1 = nextStep1,
            this.nextStep2 = nextStep2
    }

    preload() {
        game.load.image('background', this.background);
        game.load.image('task', this.task);
        game.load.image('option1', this.option1);
        game.load.image('option2', this.option2);
        game.load.image('lexy', this.lexy);
        game.load.image('statusBar', this.statusBar);
        game.load.image('hand', this.hand);
    }

    create() {
        var backgroundSprite = this.add.sprite(0, 0, "background");
        var lexySprite = this.add.sprite(106, 31, "lexy");
        var statusBarSprite = this.add.sprite(300, 31, "statusBar");
        var handSprite = this.add.sprite(128, 901, "hand");
        var timer = setTimeout(timeout, 2000);
        var timeout = function () {
            handSprite.visible = true
            game.add.tween(handSprite).to({ y: 655 }, 800).to({ x: 400 }, 800).to({ x: 100 }, 800).to({ y: 901 }, 800).start()
            game.world.bringToTop(handSprite);
        }

        handSprite.visible = false

        statusBarSprite.anchor.set(0.5, 0.5)

        setTimeout(() => {
            var taskSprite = this.add.sprite(63, -50, "task")
            var option1Button = this.add.button(165, 703, "option1", this.press, this)
            var option2Button = this.add.button(435, 703, "option2", this.press, this)

            game.add.tween(statusBarSprite.scale).to({ x: 0, y: 0 }, 200).start()
            game.add.tween(taskSprite).to({ x: 63, y: 10 }, 300).start()

            option1Button.anchor.set(0.5, 0.5);
            option1Button.width = 250;
            option1Button.height = 276;

            option2Button.anchor.set(0.5, 0.5);
            option2Button.width = 250;
            option2Button.height = 276;
        }, 1000)

        document.querySelector("body").onmousemove = function () {
            clearTimeout(timer);
            timer = setTimeout(timeout, 2000);
        }
    }
    press (e) {
        game.add.tween(e.scale).to({ x: 0.48, y: 0.48 }, 150, Phaser.Easing.Linear.None, true).start()
        if (e.key == "option1") {
            game.state.start(this.nextStep1);
        } else if (e.key == "option2") {
            game.state.start(this.nextStep2)
        }
    }
}