scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(1, 10), assets.tile`myTile3`)
    tiles.setTileAt(tiles.getTileLocation(5, 14), assets.tile`myTile3`)
    tiles.setTileAt(tiles.getTileLocation(5, 13), assets.tile`myTile3`)
    tiles.setWallAt(tiles.getTileLocation(5, 14), false)
    tiles.setWallAt(tiles.getTileLocation(5, 13), false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(1, 8), assets.tile`myTile3`)
    tiles.setTileAt(tiles.getTileLocation(8, 7), assets.tile`myTile3`)
    tiles.setTileAt(tiles.getTileLocation(8, 8), assets.tile`myTile3`)
    tiles.setWallAt(tiles.getTileLocation(8, 7), false)
    tiles.setWallAt(tiles.getTileLocation(8, 8), false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.reset()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    effects.confetti.startScreenEffect(5000)
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    effects.blizzard.startScreenEffect(300)
    info.setLife(0)
})
let mySprite: Sprite = null
let Main = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . e e e e e e e e e e . . . 
    . . . . 2 2 2 2 2 2 2 . . e . . 
    . . . 2 2 2 2 2 2 2 2 2 . . e . 
    . . 2 2 2 2 2 2 2 2 2 2 2 . e . 
    . . 2 2 f 1 2 2 2 1 f 2 2 . e . 
    . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    2 . 2 2 2 2 2 2 2 2 2 2 2 . 2 . 
    . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . . 2 2 2 2 2 2 2 . . . . . 
    . . . . . 2 . . 2 . . . . . . . 
    . . . . . 2 . . 2 . . . . . . . 
    . . . . f f . . f f . . . . . . 
    `, SpriteKind.Player)
let Angry = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 3 3 . . . 3 3 . . . . 
    . . . . 3 3 3 3 3 3 3 3 3 . . . 
    . . . 3 3 3 3 3 3 3 3 3 3 3 . . 
    . . . 3 3 f 1 3 3 3 1 f 3 3 . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . . . 3 3 d 3 3 3 3 3 d 3 3 . . 
    . . . 3 3 3 d d d d d 3 3 3 . . 
    . . . . 3 3 3 3 3 3 3 3 3 . . . 
    . . . . . 3 3 3 . 3 3 3 . . . . 
    . . . . . . 3 . . . 3 . . . . . 
    . . . . . . 3 . . . 3 . . . . . 
    . . . . . . 3 . . . 3 . . . . . 
    `, SpriteKind.Enemy)
Angry.follow(Main, 75)
Angry.setFlag(SpriteFlag.GhostThroughWalls, true)
controller.moveSprite(Main)
tiles.setCurrentTilemap(tilemap`level2`)
tiles.placeOnTile(Main, tiles.getTileLocation(4, 1))
tiles.placeOnTile(Angry, tiles.getTileLocation(1, 1))
scene.cameraFollowSprite(Main)
let myCounter = sevenseg.createCounter()
myCounter.follow(mySprite)
info.setLife(1)
if (info.life() == 0) {
    game.gameOver(false)
}
