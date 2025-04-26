def Serial_ini():
    serial.set_baud_rate(BaudRate.BAUD_RATE115200)
    serial.redirect_to_usb()
    serial.write_line("A=Abierto")
    serial.redirect_to_usb()
    serial.write_line("C=Cerrado")
    serial.redirect_to_usb()
Serial_ini()
A = 0
C = 0
for index in range(1e+79):
    basic.show_leds("""
        . # # # #
        # # . # .
        # # # . .
        # # # # .
        . # # # #
        """)
    serial.write_value("A", 1)
    serial.write_value("C", 0)
    basic.pause(1000)
    basic.show_leds("""
        . # # # .
        # # . # #
        # # # # #
        # # # # #
        . # # # .
        """)
    serial.write_value("A", 0)
    serial.write_value("C", 1)
    basic.pause(1000)