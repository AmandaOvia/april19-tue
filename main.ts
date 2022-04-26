// Counter
// 0 1 21 3
input.onButtonPressed(Button.A, function () {
    for (let x = 0; x <= 4; x++) {
        for (let Y = 0; Y <= 0; Y++) {
            led.plot(Y, x)
            basic.pause(200)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    for (let x = 0; x <= 0; x++) {
        led.plot(x, Y)
        basic.pause(100)
    }
})
let Y = 0
let x = 4
Y = 0
