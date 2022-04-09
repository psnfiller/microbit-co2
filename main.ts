input.onButtonPressed(Button.A, function () {
    show_bar_graph = false
    basic.showNumber(co2)
    show_bar_graph = true
})
input.onButtonPressed(Button.B, function () {
    bleep = !(bleep)
})
let co2 = 0
let bleep = false
let show_bar_graph = false
show_bar_graph = true
bleep = true
loops.everyInterval(500, function () {
    co2 = pins.analogReadPin(AnalogPin.P2) * 4
    if (show_bar_graph) {
        led.plotBarGraph(
        co2,
        2000
        )
        serial.writeNumber(co2)
        serial.writeLine("")
        if (1000 < co2 && bleep) {
            music.playTone(262, music.beat(BeatFraction.Breve))
        }
    }
})
basic.forever(function () {
	
})
