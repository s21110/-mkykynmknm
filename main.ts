input.onButtonPressed(Button.A, function () {
    basic.showString("" + (counter))
})
input.onGesture(Gesture.Shake, function () {
    counter += 1
})
let counter = 0
counter = 0
