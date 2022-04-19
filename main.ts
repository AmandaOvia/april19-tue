// Counter
// 0 1 21 3
input.onButtonPressed(Button.A, function () {
    for (let x = 0; x <= 4; x++) {
        led.plot(x, 4 - x)
        basic.pause(200)
    }
})
basic.forever(function () {
	
})
