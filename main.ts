input.onButtonPressed(Button.A, function () {
    index += 1
})
input.onButtonPressed(Button.B, function () {
    index += -1
})
let index = 0
basic.forever(function () {
    basic.showNumber(index)
})
