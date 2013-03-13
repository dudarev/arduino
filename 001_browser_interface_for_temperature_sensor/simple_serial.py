#!/usr/bin/env python

import json
import serial

ser = serial.Serial(
    port='/dev/ttyACM1',
    baudrate=9600,
    bytesize=8,
    parity='N',
    stopbits=1,
    timeout=1)

ser.open()
while True:
    s = ser.readline()
    data_raw = s.split(' ')
    f = open('data.json', 'w')
    if len(data_raw) > 3:
        f.write(json.dumps(
            {
                'humidity': float(data_raw[1]),
                'temperature': float(data_raw[3]),
            }))
