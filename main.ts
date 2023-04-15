input.onButtonPressed(Button.A, function () {
    шар.turn(Direction.Right, 90)
    шар.move(1)
    шар.turn(Direction.Left, 90)
})
input.onButtonPressed(Button.B, function () {
    шар.turn(Direction.Left, 90)
    шар.move(1)
    шар.turn(Direction.Right, 90)
})
let враг: game.LedSprite = null
let враг_y = 0
let шар: game.LedSprite = null
шар = game.createSprite(2, 2)
basic.forever(function () {
    враг_y = randint(0, 4)
    враг = game.createSprite(0, враг_y)
    basic.pause(1000)
    for (let index = 0; index < 4; index++) {
        враг.move(1)
        if (шар.isTouching(враг)) {
            game.gameOver()
        }
        basic.pause(1000)
    }
    враг.delete()
})
