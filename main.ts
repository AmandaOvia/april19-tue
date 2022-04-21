// Counter
// 0 1 21 3
input.onButtonPressed(Button.A, function () {
    for (let x = 0; x <= 4; x++) {
        for (let Y = 0; Y <= 0; Y++) {
            led.plot(x, Y)
            basic.pause(200)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    for (let Y = 0; Y <= 4; Y++) {
        for (let x = 0; x <= 4; x++) {
            led.toggle(x, Y)
            basic.pause(200)
        }
    }
})
let x = 4
let Y = 0
