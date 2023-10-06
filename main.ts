let counter = 0
input.onButtonPressed(Button.A, function () {
    counter += 1
    basic.showString("" + (counter))
})
input.onButtonPressed(Button.B, function () {
    counter = 0
})
basic.forever(function () {
	
})
