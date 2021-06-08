enum RadioMessage {
    message1 = 49434
}
input.onButtonPressed(Button.A, function () {
    music.setVolume(0)
    basic.showString("" + (input.compassHeading()))
    basic.showString("o")
    basic.showString("" + (input.temperature()))
    basic.showString("oC")
    music.setVolume(127)
})
input.onButtonPressed(Button.AB, function () {
    music.setVolume(0)
    basic.showIcon(IconNames.No)
})
input.onButtonPressed(Button.B, function () {
    music.setVolume(0)
    game.addScore(1)
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # . .
            `)
    }
    for (let index = 0; index < 1e+107; index++) {
        basic.showLeds(`
            . # . # .
            # . . . #
            . # . # .
            . . . . .
            # # # # #
            `)
        radio.sendMessage(RadioMessage.message1)
    }
})
basic.showIcon(IconNames.EigthNote)
music.playMelody("C5 C B D A E G E ", 120)
music.playMelody("C5 C C5 F C A D G ", 120)
music.playMelody("C5 F G - A B C5 C ", 120)
basic.clearScreen()
