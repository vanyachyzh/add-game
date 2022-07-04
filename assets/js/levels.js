var Dress = new Template(room, dress, statusBar1, taskBag, optionWoodBag, optionBlueBag, "DressWood","DressBlue")
var DressBlue = new Template(room, dressBlue, statusBar2, taskAccessory, optionSunglasses, optionChocker, "DressBlueSunglasses", "DressBlueChocker")
var DressWood = new Template(room, dressWood, statusBar2, taskAccessory, optionSunglasses, optionChocker, "DressWoodSunglasses", "DressWoodChocker")

var DressBlueSunglasses = new Template(room, dressBlueSunglasses, statusBar3,taskPlace, optionNightBeach, optionDayBeach, "DressBlueSunglassesNight", "DressBlueSunglassesDay")
var DressBlueChocker = new Template(room, dressBlueChocker, statusBar3,taskPlace, optionNightBeach, optionDayBeach, "DressBlueChockerNight", "DressBlueChockerDay")
var DressWoodSunglasses = new Template(room,dressWoodSunglasses, statusBar3, taskPlace, optionNightBeach, optionDayBeach,  "DressWoodSunglassesNight", "DressWoodSunglassesDay")
var DressWoodChocker = new Template(room,dressWoodSunglasses, statusBar3, taskPlace, optionNightBeach, optionDayBeach,  "DressWoodChockerNight", "DressWoodChockerDay")

var DressBlueSunglassesNight = new Result(nightBeach, dressBlueSunglasses);
var DressBlueSunglassesDay = new Result(dayBeach, dressBlueSunglasses);
var DressBlueChockerNight = new Result(nightBeach, dressBlueChocker);
var DressBlueChockerDay = new Result(dayBeach, dressBlueChocker);
var DressWoodSunglassesNight = new Result(nightBeach, dressWoodSunglasses);
var DressWoodSunglassesDay = new Result(dayBeach, dressWoodSunglasses);
var DressWoodChockerNight = new Result(nightBeach, dressWoodChocker);
var DressWoodChockerDay = new Result(dayBeach, dressWoodChocker);

var Shorts = new Template(room, shorts, statusBar1, taskBag, optionWoodBag, optionBlueBag, "ShortsWood","ShortsBlue")
var ShortsBlue = new Template(room, shortsBlue, statusBar2, taskAccessory, optionSunglasses, optionNecklace, "ShortsBlueSunglasses", "ShortsBlueNecklace")
var ShortsWood = new Template(room, shortsWood, statusBar2, taskAccessory, optionSunglasses, optionNecklace, "ShortsWoodSunglasses", "ShortsWoodNecklace")

var ShortsBlueSunglasses = new Template(room, shortsBlueSunglasses, statusBar3,taskPlace, optionNightBeach, optionDayBeach, "ShortsBlueSunglassesNight", "ShortsBlueSunglassesDay")
var ShortsBlueNecklace = new Template(room, shortsBlueNecklace, statusBar3,taskPlace, optionNightBeach, optionDayBeach, "ShortsBlueNecklaceNight", "ShortsBlueNecklaceDay")
var ShortsWoodSunglasses = new Template(room,shortsWoodSunglasses, statusBar3, taskPlace, optionNightBeach, optionDayBeach,  "ShortsWoodSunglassesNight", "ShortsWoodSunglassesDay")
var ShortsWoodNecklace = new Template(room, shortsWoodNecklace, statusBar3, taskPlace, optionNightBeach, optionDayBeach,  "ShortsWoodNecklaceNight", "ShortsWoodNecklaceDay")

var ShortsBlueSunglassesNight = new Result(nightBeach, shortsBlueSunglasses);
var ShortsBlueSunglassesDay = new Result(dayBeach, shortsBlueSunglasses);
var ShortsBlueNecklaceNight = new Result(nightBeach, shortsBlueNecklace);
var ShortsBlueNecklaceDay = new Result(dayBeach, shortsBlueNecklace);
var ShortsWoodSunglassesNight = new Result(nightBeach, shortsWoodSunglasses);
var ShortsWoodSunglassesDay = new Result(dayBeach, shortsWoodSunglasses);
var ShortsWoodNecklaceNight = new Result(nightBeach, shortsWoodNecklace);
var ShortsWoodNecklaceDay = new Result(dayBeach, shortsWoodNecklace);