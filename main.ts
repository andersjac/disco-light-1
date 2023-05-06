basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.forever(function () {
    led.setBrightness(255)
    if (input.soundLevel() < 20) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (input.soundLevel() >= 20 && input.soundLevel() < 40) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # . # . #
            `)
    } else if (input.soundLevel() >= 40 && input.soundLevel() < 60) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . # # .
            # # # # #
            `)
    } else if (input.soundLevel() >= 60 && input.soundLevel() < 80) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . # #
            # # # # #
            # # # # #
            `)
    } else if (input.soundLevel() >= 80 && input.soundLevel() < 100) {
        basic.showLeds(`
            . . . . .
            # . # . #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (input.soundLevel() >= 100 && input.soundLevel() < 120) {
        basic.showLeds(`
            # # # . .
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (input.soundLevel() >= 120 && input.soundLevel() <= 255) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.showIcon(IconNames.No)
    }
})
