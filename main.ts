// Counter
// 0 1 21 3
input.onButtonPressed(Button.A, function () {
    for (let x = 0; x <= 4; x++) {
        let Y = 0
        led.plot(Y, 4 - x)
        basic.pause(200)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let Y = 0; Y <= 4; Y++) {
        let x = 0
        led.plot(Y, 4 - x)
        basic.pause(200)
    }
})
