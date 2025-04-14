namespace SpriteKind {
    export const Bundle = SpriteKind.create()
    export const cursor = SpriteKind.create()
    export const Leaves = SpriteKind.create()
    export const Block = SpriteKind.create()
    export const MOB = SpriteKind.create()
    export const flor = SpriteKind.create()
    export const particle = SpriteKind.create()
    export const Creacking_Heart = SpriteKind.create()
    export const Pale_Pumpkin = SpriteKind.create()
    export const Life = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Steve.x == 0) {
        Steve.vy = -100
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Steve.overlapsWith(Pale_Moss_Block)) {
        Pale_Moss_Block = sprites.create(assets.image`Pale Moss Block 2`, SpriteKind.Block)
        tiles.placeOnRandomTile(Pale_Moss_Block, assets.tile`minecraft_pale_grass`)
        Pale_moss_carpet = sprites.create(assets.image`Pale Moss Carpet 2`, SpriteKind.Block)
        tiles.placeOnRandomTile(Pale_moss_carpet, assets.tile`transparency16`)
        Pale_moss_carpet.ay = 300
    }
    if (tiles.tileAtLocationEquals(tiles.locationOfSprite(Cursor), assets.tile`transparency16`)) {
        tiles.setWallAt(tiles.locationOfSprite(Cursor), true)
        tiles.setTileAt(tiles.locationOfSprite(Cursor), assets.tile`minecraft_oak_planks`)
    }
    if (tiles.tileAtLocationEquals(tiles.locationOfSprite(Cursor), assets.tile`minecraft_wood`)) {
        tiles.setWallAt(tiles.locationOfSprite(Cursor), true)
        tiles.setTileAt(tiles.locationOfSprite(Cursor), assets.tile`minecraft_tronco_sin_corteza_pálida`)
    }
    if (tiles.tileAtLocationEquals(tiles.locationOfSprite(Cursor), assets.tile`minecraft_dirt`)) {
        tiles.setWallAt(tiles.locationOfSprite(Cursor), true)
        tiles.setTileAt(tiles.locationOfSprite(Cursor), assets.tile`minecraft_pale_grass`)
    }
    if (tiles.tileAtLocationEquals(tiles.locationOfSprite(Cursor), assets.tile`minecraft_cobblestone`)) {
        tiles.setWallAt(tiles.locationOfSprite(Cursor), true)
        tiles.setTileAt(tiles.locationOfSprite(Cursor), assets.tile`minecraft_piedra_pulida`)
    }
    if (tiles.tileAtLocationEquals(tiles.locationOfSprite(Cursor), assets.tile`minecraft_pale_grass`)) {
        tiles.setWallAt(tiles.locationOfSprite(Cursor), true)
        tiles.setTileAt(tiles.locationOfSprite(Cursor), assets.tile`minecraft_path`)
    }
    if (tiles.tileAtLocationEquals(tiles.locationOfSprite(Cursor), assets.tile`minecraft_wood`)) {
        tiles.setWallAt(tiles.locationOfSprite(Cursor), false)
        tiles.setTileAt(tiles.locationOfSprite(Cursor), assets.tile`minecraft_tronco_sin_corteza_pálida`)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Crujidor.overlapsWith(Steve)) {
        Eye_Particle = sprites.create(assets.image`Creacking Part`, SpriteKind.Player)
        tiles.placeOnTile(Eye_Particle, tiles.locationOfSprite(Crujidor))
        Eye_Particle.follow(Creacking_Heart2, 110)
    }
    if (Steve.overlapsWith(Creacking_Heart2)) {
        sprites.destroy(Creacking_Heart2, effects.none, 100)
        sprites.destroy(Crujidor, effects.blizzard, 2000)
        sprites.destroy(Eye_Particle, effects.blizzard, 2000)
    }
    if (Steve.overlapsWith(Closed_eye_blossom)) {
        sprites.destroy(Closed_eye_blossom, effects.none, 100)
    }
    if (Steve.overlapsWith(Pale_Grass)) {
        sprites.destroy(Pale_Grass, effects.none, 100)
    }
    if (Steve.overlapsWith(Pale_moss_carpet)) {
        sprites.destroy(Pale_moss_carpet, effects.none, 100)
    }
    if (Steve.overlapsWith(Pale_Moss_Block)) {
        sprites.destroy(Pale_Moss_Block, effects.none, 100)
    }
    if (Steve.overlapsWith(Brute_iron_Block)) {
        sprites.destroy(Brute_iron_Block, effects.none, 100)
    }
    if (Steve.overlapsWith(Brute_iron_Block_2)) {
        sprites.destroy(Brute_iron_Block_2, effects.none, 100)
    }
    if (Steve.overlapsWith(Brute_iron_Block_3)) {
        sprites.destroy(Brute_iron_Block_3, effects.none, 100)
    }
    if (Steve.overlapsWith(Brute_iron_Block_4)) {
        sprites.destroy(Brute_iron_Block_4, effects.none, 100)
    }
    if (Steve.overlapsWith(Brute_iron_Block_5)) {
        sprites.destroy(Brute_iron_Block_5, effects.none, 100)
    }
    if (Steve.overlapsWith(Coal_Block)) {
        sprites.destroy(Coal_Block, effects.none, 100)
    }
    if (Steve.overlapsWith(Coal_Block_2)) {
        sprites.destroy(Coal_Block_2, effects.none, 100)
    }
    if (Steve.overlapsWith(Coal_Block_3)) {
        sprites.destroy(Coal_Block_3, effects.none, 100)
    }
    if (Steve.overlapsWith(Coal_Block_4)) {
        sprites.destroy(Coal_Block_4, effects.none, 100)
    }
    if (Steve.overlapsWith(Coal_Block_5)) {
        sprites.destroy(Coal_Block_5, effects.none, 100)
    }
    if (Steve.overlapsWith(Coal_Block_6)) {
        sprites.destroy(Coal_Block_6, effects.none, 100)
    }
    if (Steve.overlapsWith(Coal_Block_7)) {
        sprites.destroy(Coal_Block_7, effects.none, 100)
    }
    if (Steve.overlapsWith(Coal_Block_8)) {
        sprites.destroy(Coal_Block_8, effects.none, 100)
    }
    if (Steve.overlapsWith(Coal_Block_9)) {
        sprites.destroy(Coal_Block_9, effects.none, 100)
    }
    if (Steve.overlapsWith(Coal_Block_10)) {
        sprites.destroy(Coal_Block_10, effects.none, 100)
    }
    if (Steve.overlapsWith(Diamond_Block)) {
        sprites.destroy(Diamond_Block, effects.none, 100)
    }
    if (Steve.overlapsWith(Diamond_Block_2)) {
        sprites.destroy(Diamond_Block_2, effects.none, 100)
    }
    if (Steve.overlapsWith(Diamond_Block_3)) {
        sprites.destroy(Diamond_Block_3, effects.none, 100)
    }
    if (Steve.overlapsWith(Diamond_Block_4)) {
        sprites.destroy(Diamond_Block_4, effects.none, 100)
    }
    if (tiles.tileAtLocationEquals(tiles.locationOfSprite(Cursor), assets.tile`PALE GARDENS GRASS`)) {
        tiles.setTileAt(tiles.locationOfSprite(Cursor), assets.tile`transparency16`)
        tiles.setWallAt(tiles.locationOfSprite(Cursor), false)
    }
    if (tiles.tileAtLocationEquals(tiles.locationOfSprite(Cursor), assets.tile`minecraft_bedrock`)) {
        tiles.setTileAt(tiles.locationOfSprite(Cursor), assets.tile`transparency16`)
        tiles.setWallAt(tiles.locationOfSprite(Cursor), false)
    }
    if (tiles.tileAtLocationEquals(tiles.locationOfSprite(Cursor), assets.tile`myTile0`)) {
        tiles.setTileAt(tiles.locationOfSprite(Cursor), assets.tile`transparency16`)
        tiles.setWallAt(tiles.locationOfSprite(Cursor), false)
    }
    if (tiles.tileAtLocationEquals(tiles.locationOfSprite(Cursor), assets.tile`minecraft_oak_planks`)) {
        tiles.setTileAt(tiles.locationOfSprite(Cursor), assets.tile`transparency16`)
        tiles.setWallAt(tiles.locationOfSprite(Cursor), false)
    }
    if (tiles.tileAtLocationEquals(tiles.locationOfSprite(Cursor), assets.tile`minecraft_leaves2`)) {
        tiles.setTileAt(tiles.locationOfSprite(Cursor), assets.tile`transparency16`)
        tiles.setWallAt(tiles.locationOfSprite(Cursor), false)
    }
    if (tiles.tileAtLocationEquals(tiles.locationOfSprite(Cursor), assets.tile`minecraft_wood`)) {
        tiles.setTileAt(tiles.locationOfSprite(Cursor), assets.tile`transparency16`)
        tiles.setWallAt(tiles.locationOfSprite(Cursor), false)
    }
    if (tiles.tileAtLocationEquals(tiles.locationOfSprite(Cursor), assets.tile`minecraft_tronco_sin_corteza_pálida`)) {
        tiles.setTileAt(tiles.locationOfSprite(Cursor), assets.tile`transparency16`)
        tiles.setWallAt(tiles.locationOfSprite(Cursor), false)
    }
    if (tiles.tileAtLocationEquals(tiles.locationOfSprite(Cursor), assets.tile`myTile1`)) {
        tiles.setTileAt(tiles.locationOfSprite(Cursor), assets.tile`transparency16`)
        tiles.setWallAt(tiles.locationOfSprite(Cursor), false)
    }
    if (tiles.tileAtLocationEquals(tiles.locationOfSprite(Cursor), assets.tile`minecraft_dirt`)) {
        tiles.setTileAt(tiles.locationOfSprite(Cursor), assets.tile`transparency16`)
        tiles.setWallAt(tiles.locationOfSprite(Cursor), false)
    }
    if (tiles.tileAtLocationEquals(tiles.locationOfSprite(Cursor), assets.tile`minecraft_piedra_pulida`)) {
        tiles.setTileAt(tiles.locationOfSprite(Cursor), assets.tile`transparency16`)
        tiles.setWallAt(tiles.locationOfSprite(Cursor), false)
    }
    if (tiles.tileAtLocationEquals(tiles.locationOfSprite(Cursor), assets.tile`minecraft_cobblestone`)) {
        tiles.setTileAt(tiles.locationOfSprite(Cursor), assets.tile`transparency16`)
        tiles.setWallAt(tiles.locationOfSprite(Cursor), false)
    }
    if (tiles.tileAtLocationEquals(tiles.locationOfSprite(Cursor), assets.tile`minecraft_path`)) {
        tiles.setTileAt(tiles.locationOfSprite(Cursor), assets.tile`transparency16`)
        tiles.setWallAt(tiles.locationOfSprite(Cursor), false)
    }
    if (tiles.tileAtLocationEquals(tiles.locationOfSprite(Cursor), assets.tile`myTile2`)) {
        tiles.setTileAt(tiles.locationOfSprite(Cursor), assets.tile`transparency16`)
        tiles.setWallAt(tiles.locationOfSprite(Cursor), false)
    }
    if (tiles.tileAtLocationEquals(tiles.locationOfSprite(Cursor), assets.tile`minecraft_pale_grass`)) {
        tiles.setTileAt(tiles.locationOfSprite(Cursor), assets.tile`transparency16`)
        tiles.setWallAt(tiles.locationOfSprite(Cursor), false)
    }
    if (tiles.tileAtLocationEquals(tiles.locationOfSprite(Cursor), assets.tile`minecraft_creacking_heart`)) {
        tiles.setTileAt(tiles.locationOfSprite(Cursor), assets.tile`transparency16`)
        tiles.setWallAt(tiles.locationOfSprite(Cursor), false)
    }
    if (tiles.tileAtLocationEquals(tiles.locationOfSprite(Cursor), assets.tile`myTile`)) {
        tiles.setTileAt(tiles.locationOfSprite(Cursor), assets.tile`transparency16`)
        tiles.setWallAt(tiles.locationOfSprite(Cursor), false)
    }
    if (tiles.tileAtLocationEquals(tiles.locationOfSprite(Cursor), assets.tile`myTile3`)) {
        tiles.setTileAt(tiles.locationOfSprite(Cursor), assets.tile`transparency16`)
        tiles.setWallAt(tiles.locationOfSprite(Cursor), false)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Cursor.setImage(assets.image`Cursor 2`)
    CursorX = -8
    CursorY = 8
    controller.moveSprite(Steve, 100, 0)
    scene.cameraFollowSprite(Steve)
    animation.runImageAnimation(
    Steve,
    assets.animation`run image 1`,
    150,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    CursorX = 8
    CursorY = 8
    animation.runImageAnimation(
    Steve,
    assets.animation`myAnim0`,
    200,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    CursorX = -8
    CursorY = 8
    animation.runImageAnimation(
    Steve,
    assets.animation`stop image 2`,
    190,
    true
    )
})
controller.combos.attachCombo("LL", function () {
    pause(100)
    controller.moveSprite(Steve, 175, 0)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Cursor.setImage(assets.image`Cursor 3`)
    CursorX = 8
    CursorY = 8
    controller.moveSprite(Steve, 100, 0)
    scene.cameraFollowSprite(Steve)
    animation.runImageAnimation(
    Steve,
    assets.animation`run image 2`,
    190,
    true
    )
})
controller.combos.attachCombo("RR", function () {
    pause(100)
    controller.moveSprite(Steve, 175, 0)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    CursorX = 0
    CursorY = 25
})
function Keys () {
    // exprimental controls 1.7.6
    MakeyMakey.setSimulatorKeymap(
    MakeyMakey.PlayerNumber.ONE,
    MakeyMakey.MakeyMakeyKey.SPACE,
    MakeyMakey.MakeyMakeyKey.S,
    MakeyMakey.MakeyMakeyKey.A,
    MakeyMakey.MakeyMakeyKey.D,
    MakeyMakey.MakeyMakeyKey.LEFT_CLICK,
    MakeyMakey.MakeyMakeyKey.RIGHT_CLICK
    )
}
function Minerales () {
    Diamond_Block = sprites.create(assets.image`myImage0`, SpriteKind.Block)
    Diamond_Block_2 = sprites.create(assets.image`myImage0`, SpriteKind.Block)
    Diamond_Block_3 = sprites.create(assets.image`myImage0`, SpriteKind.Block)
    Diamond_Block_4 = sprites.create(assets.image`myImage0`, SpriteKind.Block)
    Coal_Block = sprites.create(assets.image`myImage1`, SpriteKind.Block)
    Coal_Block_2 = sprites.create(assets.image`myImage1`, SpriteKind.Block)
    Coal_Block_3 = sprites.create(assets.image`myImage1`, SpriteKind.Block)
    Coal_Block_4 = sprites.create(assets.image`myImage1`, SpriteKind.Block)
    Coal_Block_5 = sprites.create(assets.image`myImage1`, SpriteKind.Block)
    Coal_Block_6 = sprites.create(assets.image`myImage1`, SpriteKind.Block)
    Coal_Block_7 = sprites.create(assets.image`myImage1`, SpriteKind.Block)
    Coal_Block_8 = sprites.create(assets.image`myImage1`, SpriteKind.Block)
    Coal_Block_9 = sprites.create(assets.image`myImage1`, SpriteKind.Block)
    Coal_Block_10 = sprites.create(assets.image`myImage1`, SpriteKind.Block)
    Brute_iron_Block = sprites.create(assets.image`myImage2`, SpriteKind.Block)
    Brute_iron_Block_2 = sprites.create(assets.image`myImage2`, SpriteKind.Block)
    Brute_iron_Block_3 = sprites.create(assets.image`myImage2`, SpriteKind.Block)
    Brute_iron_Block_4 = sprites.create(assets.image`myImage2`, SpriteKind.Block)
    Brute_iron_Block_5 = sprites.create(assets.image`myImage2`, SpriteKind.Block)
    tiles.placeOnRandomTile(Brute_iron_Block, assets.tile`minecraft_cobblestone`)
    tiles.placeOnRandomTile(Brute_iron_Block_2, assets.tile`minecraft_cobblestone`)
    tiles.placeOnRandomTile(Brute_iron_Block_3, assets.tile`minecraft_cobblestone`)
    tiles.placeOnRandomTile(Brute_iron_Block_4, assets.tile`minecraft_cobblestone`)
    tiles.placeOnRandomTile(Brute_iron_Block_5, assets.tile`minecraft_cobblestone`)
    tiles.placeOnRandomTile(Coal_Block, assets.tile`minecraft_cobblestone`)
    tiles.placeOnRandomTile(Coal_Block_2, assets.tile`minecraft_cobblestone`)
    tiles.placeOnRandomTile(Coal_Block_3, assets.tile`minecraft_cobblestone`)
    tiles.placeOnRandomTile(Coal_Block_4, assets.tile`minecraft_cobblestone`)
    tiles.placeOnRandomTile(Coal_Block_5, assets.tile`minecraft_cobblestone`)
    tiles.placeOnRandomTile(Coal_Block_6, assets.tile`minecraft_cobblestone`)
    tiles.placeOnRandomTile(Coal_Block_7, assets.tile`minecraft_cobblestone`)
    tiles.placeOnRandomTile(Coal_Block_8, assets.tile`minecraft_cobblestone`)
    tiles.placeOnRandomTile(Coal_Block_9, assets.tile`minecraft_cobblestone`)
    tiles.placeOnRandomTile(Coal_Block_10, assets.tile`minecraft_cobblestone`)
    tiles.placeOnRandomTile(Diamond_Block, assets.tile`minecraft_cobblestone`)
    tiles.placeOnRandomTile(Diamond_Block_2, assets.tile`minecraft_cobblestone`)
    tiles.placeOnRandomTile(Diamond_Block_3, assets.tile`minecraft_cobblestone`)
    tiles.placeOnRandomTile(Diamond_Block_4, assets.tile`minecraft_cobblestone`)
}
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    CursorX = 0
    CursorY = -25
})
function Crepitante (Creacking: Sprite) {
    Crujidor = sprites.create(img`
        .........................
        .....8..8.f...f.f........
        .....88.88ff.ffff........
        .....88888fffffff........
        .....88888fffffff4.......
        ....448888fffffff.4......
        ...4.88888767ffff44......
        ....444888fffffff..4.....
        .....88888ffff76744......
        ....448888fffffff........
        ...4.88888fffffff44......
        ....444488f767fff.4......
        .....48888fffffff4.......
        .....84444fffffff........
        87f..88888fffffff87f.....
        88f8888888888888f8ff.....
        88f888888888888ff8ff.....
        88f8fffffffffffff8ff.....
        88f8fffffffffffff8ff.....
        88f8fffffffffffff84f.....
        48f8fffffffffffff8f4.....
        4448fffffffffffff8f4.....
        44f...88888fffffff44.....
        444...88888ffffff844.....
        884...88888ffffff844.....
        884...88888ffffff8f4.....
        ff4...88888ffffff8f4.....
        f8f...88888ffffff84f.....
        8f4...88888ffffff84f.....
        ff4...88888ffffff84f.....
        8f48.87f7f8.87f7ff44.....
        ff4888ffff888fffff84.....
        ...888ffff888ffff........
        ...888ffff888ffff........
        ...888f44f888ff44........
        ...488ff44888f44f........
        ...444fff488f4fff........
        ...8844ff488f4fff........
        ...888444488f44ff........
        ...888444f88ff444........
        ...88f44ff8884f44........
        ...88f44ff8ff4f44........
        ...88f4fffff8fff4........
        ...8ff44ff8f8f444........
        ...ff4f44f88f44ff........
        ...ff4ff4f88f44ff........
        ...884ff4f8f8f44f........
        ...884ff4f8f8ff44........
        `, SpriteKind.Player)
    tiles.placeOnRandomTile(Crujidor, assets.tile`minecraft_leaves2`)
    Crujidor.ay = 800
    Crujidor.follow(Steve, 45)
    characterAnimations.loopFrames(
    Crujidor,
    assets.animation`CreackingAnim Left`,
    100,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    Crujidor,
    assets.animation`CreackingAnim Right`,
    100,
    characterAnimations.rule(Predicate.MovingRight)
    )
}
controller.player2.onEvent(ControllerEvent.Connected, function () {
    scene.cameraFollowSprite(Cursor)
})
function CreateNewWorld () {
    LandHight = 10
    for (let XIndex = 0; XIndex <= 31; XIndex++) {
        if (Math.percentChance(HillHightRange / 2)) {
            LandHight = LandHight - 1
        }
        if (Math.percentChance(HillHightRange / 2)) {
            LandHight = LandHight - 1
        }
        if (Math.percentChance(HillHightRange / 2)) {
            LandHight = LandHight + 1
        }
        if (Math.percentChance(HillHightRange / 2)) {
            LandHight = LandHight + 1
        }
        tiles.setTileAt(tiles.getTileLocation(XIndex, LandHight), assets.tile`minecraft_pale_grass`)
        tiles.setWallAt(tiles.getTileLocation(XIndex, LandHight), true)
        YIndex = 0
        while (YIndex <= 31 - LandHight) {
            tiles.setTileAt(tiles.getTileLocation(XIndex, 32 - YIndex), assets.tile`minecraft_dirt`)
            tiles.setWallAt(tiles.getTileLocation(XIndex, 32 - YIndex), true)
            YIndex += 1
        }
        YIndex3 = 0
        while (YIndex3 <= 31 - LandHight) {
            tiles.setTileAt(tiles.getTileLocation(XIndex, 33 - YIndex3), assets.tile`minecraft_cobblestone`)
            tiles.setWallAt(tiles.getTileLocation(XIndex, 32 - YIndex3), true)
            YIndex3 += 1
        }
        YIndex2 = 0
        while (YIndex3 <= 50 - LandHight) {
            let YIndex22 = 0
            tiles.setTileAt(tiles.getTileLocation(XIndex, 32 - YIndex22), assets.tile`minecraft_bedrock`)
            tiles.setWallAt(tiles.getTileLocation(XIndex, 32 - YIndex22), true)
            YIndex3 += 1
        }
    }
}
let YIndex2 = 0
let YIndex3 = 0
let YIndex = 0
let LandHight = 0
let Diamond_Block_4: Sprite = null
let Diamond_Block_3: Sprite = null
let Diamond_Block_2: Sprite = null
let Diamond_Block: Sprite = null
let Coal_Block_10: Sprite = null
let Coal_Block_9: Sprite = null
let Coal_Block_8: Sprite = null
let Coal_Block_7: Sprite = null
let Coal_Block_6: Sprite = null
let Coal_Block_5: Sprite = null
let Coal_Block_4: Sprite = null
let Coal_Block_3: Sprite = null
let Coal_Block_2: Sprite = null
let Coal_Block: Sprite = null
let Brute_iron_Block_5: Sprite = null
let Brute_iron_Block_4: Sprite = null
let Brute_iron_Block_3: Sprite = null
let Brute_iron_Block_2: Sprite = null
let Brute_iron_Block: Sprite = null
let Pale_Grass: Sprite = null
let Closed_eye_blossom: Sprite = null
let Creacking_Heart2: Sprite = null
let Eye_Particle: Sprite = null
let Crujidor: Sprite = null
let Pale_moss_carpet: Sprite = null
let Pale_Moss_Block: Sprite = null
let CursorY = 0
let CursorX = 0
let Cursor: Sprite = null
let Steve: Sprite = null
let HillHightRange = 0
// From 0 to 100. The higher the number, the bumpier the terrain. 0 means a superflatworld.
HillHightRange = 3
tiles.setCurrentTilemap(tilemap`level3`)
CreateNewWorld()
scene.setBackgroundColor(2)
Steve = sprites.create(assets.image`Steve`, SpriteKind.Player)
animation.runImageAnimation(
Steve,
assets.animation`myAnim0`,
200,
true
)
scene.cameraFollowSprite(Steve)
controller.moveSprite(Steve, 100, 0)
Steve.ay = 300
tiles.placeOnRandomTile(Steve, assets.tile`transparency16`)
Cursor = sprites.create(assets.image`Coursor IMG`, SpriteKind.cursor)
Cursor.setFlag(SpriteFlag.StayInScreen, true)
Cursor.setFlag(SpriteFlag.Ghost, true)
CursorX = 8
CursorY = 8
scene.cameraFollowSprite(Steve)
Keys()
Minerales()
game.onUpdate(function () {
    if (controller.player2.isPressed(ControllerButton.Left)) {
        CursorX += -1
    }
    if (controller.player2.isPressed(ControllerButton.Right)) {
        CursorX += 1
    }
    if (controller.player2.isPressed(ControllerButton.Up)) {
        CursorY += -1
    }
    if (controller.player2.isPressed(ControllerButton.Down)) {
        CursorY += 1
    }
    Cursor.setPosition(Steve.x + CursorX, Steve.x + CursorY)
})
forever(function () {
    Pale_Moss_Block = sprites.create(assets.image`Pale Moss Block`, SpriteKind.Block)
    tiles.placeOnRandomTile(Pale_Moss_Block, assets.tile`minecraft_pale_grass`)
    pause(10000)
})
forever(function () {
    Pale_moss_carpet = sprites.create(assets.image`Pale Moss Carpet`, SpriteKind.Block)
    tiles.placeOnRandomTile(Pale_moss_carpet, assets.tile`transparency16`)
    Pale_moss_carpet.ay = 300
    pause(30000)
})
forever(function () {
    Closed_eye_blossom = sprites.create(assets.image`Closed-Open Eyeblossom`, SpriteKind.Block)
    tiles.placeOnRandomTile(Closed_eye_blossom, assets.tile`transparency16`)
    Closed_eye_blossom.ay = 300
    pause(100000)
    animation.runImageAnimation(
    Closed_eye_blossom,
    assets.animation`Closed-opened Eyeblossom`,
    300,
    true
    )
})
forever(function () {
    Creacking_Heart2 = sprites.create(img`
        f f 7 f f 7 7 7 f f 7 f 7 f f f 
        f f 7 f f 7 f f 7 7 7 f 7 f f f 
        f f 7 f f 7 f f 7 f f 7 f 7 f f 
        f 8 7 7 7 f f 7 f f f f f 7 f f 
        8 a 8 8 a 7 7 a 7 7 7 7 f 7 7 7 
        8 a a 8 a 7 a a 7 a a a f 7 f f 
        8 a 9 a a 9 9 a a a 9 a 7 a f f 
        8 a 9 9 9 9 9 a a 9 9 9 a a f 7 
        a a a a a a 9 9 9 9 9 9 9 a a a 
        a a 7 7 7 7 a 9 9 9 a 9 9 9 9 a 
        a 7 f f 7 f 7 a a a a a a a a a 
        7 7 f f 7 f 7 a 7 7 a 7 7 a a 7 
        f 7 f f 7 f f 7 f f 7 f f f 7 f 
        f 7 f 7 f 7 f 7 f 7 7 f f 7 f f 
        f f 7 f f f 7 7 f 7 f f f f 7 f 
        f f 7 f f f 7 f f f 7 f f 7 f f 
        `, SpriteKind.Creacking_Heart)
    tiles.placeOnRandomTile(Creacking_Heart2, assets.tile`minecraft_wood`)
    Crepitante(Crujidor)
    pause(60000)
})
forever(function () {
    Pale_Grass = sprites.create(assets.image`Pale Grass`, SpriteKind.Block)
    tiles.placeOnRandomTile(Pale_Grass, assets.tile`transparency16`)
    tiles.placeOnRandomTile(Pale_Grass, assets.tile`minecraft_leaves2`)
    Pale_Grass.ay = 300
    animation.runImageAnimation(
    Pale_Grass,
    assets.animation`GrassAnim1`,
    300,
    false
    )
    pause(50000)
})
