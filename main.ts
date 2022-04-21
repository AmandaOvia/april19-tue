input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 4; index++) {
        for (let x = 0; x <= 4; x++) {
            basic.pause(200)
        }
    }
})
// Counter
// 0 1 21 3
input.onButtonPressed(Button.B, function () {
    for (let Y = 0; Y <= 4; Y++) {
        led.plot(x, Y)
        basic.pause(200)
        led.plot(0, 4)
    }
})
let x = 0
x = 4
let Y = 0
