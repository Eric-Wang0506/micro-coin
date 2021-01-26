// show my coins
input.onButtonPressed(Button.A, function () {
    led.stopAnimation()
    coins = blockchain.valuesFrom(blockchain.id()).length
    basic.showNumber(coins)
    basic.showString("COINS")
})
// shaking is mining...
input.onGesture(Gesture.Shake, function () {
    led.stopAnimation()
    basic.clearScreen()
    // display a short pause
    basic.pause(200)
    if (randint(0, 2) == 0) {
        // we found a coin!!!
        blockchain.addBlock(1)
        basic.showIcon(IconNames.Diamond)
    } else {
        // missed!
        basic.showIcon(IconNames.Asleep)
    }
})
// show the block chain size
input.onButtonPressed(Button.B, function () {
    led.stopAnimation()
    basic.showNumber(blockchain.length())
    basic.showString("BLOCKS")
})
let coins = 0
// instructions on how to play
basic.showString("A=COINS B=CHAIN SHAKE=MINE")
