var game;
game = new Phaser.Game(600, 900, Phaser.CAVAS, "ph_game");
game.state.add('Intro', Intro);
game.state.add('Tutorial', Tutorial);
game.state.add("Dress", Dress)
game.state.add("DressBlue", DressBlue)
game.state.add("DressWood",DressWood)
game.state.add("DressBlueChocker",DressBlueChocker)
game.state.add("DressBlueSunglasses",DressBlueSunglasses)
game.state.add("DressWoodChocker",DressWoodChocker)
game.state.add("DressWoodSunglasses",DressWoodSunglasses)
game.state.add("DressBlueSunglassesNight",DressBlueSunglassesNight)
game.state.add("DressBlueSunglassesDay",DressBlueSunglassesDay)
game.state.add("DressBlueChockerNight",DressBlueChockerNight)
game.state.add("DressBlueChockerDay",DressBlueChockerDay)
game.state.add("DressWoodSunglassesNight",DressWoodSunglassesNight)
game.state.add("DressWoodSunglassesDay",DressWoodSunglassesDay)
game.state.add("DressWoodChockerNight",DressWoodChockerNight)
game.state.add("DressWoodChockerDay",DressWoodChockerDay)

game.state.add("Shorts",Shorts)
game.state.add("ShortsBlue",ShortsBlue)
game.state.add("ShortsWood",ShortsWood)
game.state.add("ShortsBlueNecklace",ShortsBlueNecklace)
game.state.add("ShortsBlueSunglasses",ShortsBlueSunglasses)
game.state.add("ShortsWoodNecklace",ShortsWoodNecklace)
game.state.add("ShortsWoodSunglasses",ShortsWoodSunglasses)
game.state.add("ShortsBlueSunglassesNight",ShortsBlueSunglassesNight)
game.state.add("ShortsBlueSunglassesDay",ShortsBlueSunglassesDay)
game.state.add("ShortsBlueNecklaceNight",ShortsBlueNecklaceNight)
game.state.add("ShortsBlueNecklaceDay",ShortsBlueNecklaceDay)
game.state.add("ShortsWoodSunglassesNight",ShortsWoodSunglassesNight)
game.state.add("ShortsWoodSunglassesDay",ShortsWoodSunglassesDay)
game.state.add("ShortsWoodNecklaceNight",ShortsWoodNecklaceNight)
game.state.add("ShortsWoodNecklaceDay",ShortsWoodNecklaceDay)





game.state.start("Dress")
game.state.start('Tutorial');
game.state.start('Intro');
// game.state.start("ShortsWoodNecklace");
