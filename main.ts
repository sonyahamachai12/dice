input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 10; index++) {
        music.playMelody("A D F - G B E F ", 155)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 6; index++) {
        basic.showNumber(randint(1, 6))
    }
})
