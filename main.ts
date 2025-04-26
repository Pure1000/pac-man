function Serial_ini () {
    serial.setBaudRate(BaudRate.BaudRate115200)
    serial.redirectToUSB()
    serial.writeLine("A=Abierto")
    serial.redirectToUSB()
    serial.writeLine("C=Cerrado")
    serial.redirectToUSB()
}
let C = 0
let A = 0
Serial_ini()
for (let index = 0; index < 1e+79; index++) {
    basic.showLeds(`
        . # # # #
        # # . # .
        # # # . .
        # # # # .
        . # # # #
        `)
    serial.writeValue("A", 1)
    serial.writeValue("C", 0)
    basic.pause(1000)
    basic.showLeds(`
        . # # # .
        # # . # #
        # # # # #
        # # # # #
        . # # # .
        `)
    serial.writeValue("A", 0)
    serial.writeValue("C", 1)
    basic.pause(1000)
}
