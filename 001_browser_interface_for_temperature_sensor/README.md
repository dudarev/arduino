## Some links about the sensor

http://www.adafruit.com/products/393
http://learn.adafruit.com/dht
http://learn.adafruit.com/dht-humidity-sensing-on-raspberry-pi-with-gdocs-logging


## Setting up hardware

Download arduino from

http://arduino.cc/en/Main/Software

Open project at `DHT-sensor-library/examples/DHTtester/`.

Instructions from there:

Connect pi1n 1 (on the left) of the sensor to +5V
Connect pin 2 of the sensor to whatever your DHTPIN is
Connect pin 4 (on the right) of the sensor to GROUND
Connect a 10K resistor from pin 2 (data) to pin 1 (power) of the sensor


## Launching browser interface

How to troubleshoot greyed out serial port:

http://blog.markloiseau.com/2012/05/install-arduino-ubuntu/

```
sudo usermod -a -G dialout USERNAME
sudo chmod a+rw /dev/ttyACM0
```

```
git submodule update
```

Start program on Arduino (project at `DHT-sensor-library/examples/DHTtester/`).

Start reading serial port output (it updates `data.json`):

```
python simple_serial.py
```

Launch simple HTTP server with:

```
python -m SimpleHTTPServer 8888
```

Navigate to http://localhost:8888
