# node-goes-bananas

> Antropoloops 💘 SonicPi

https://github.com/danigb/node-goes-bananas.git

## RaspberryPi

* `nmap -sn 192.168.1.0/24`
* `ssh pi@192.168.1.138` (raspberry)

## Setup

* Clone this repo: `git clone git@github.com:antropoloops/node-goes-bananas.git`
* Install sonic-pi: `sudo apt-get install sonic-pi`

## Start SonicPi in server mode

* Go to sonic-pi folder (in RaspberyPi /opt/sonic-pi/): `cd /opt/sonic-pi/`

NOTE: this works on linux... still investigating how to install on Mac (see INSTALL_MAC.md at SonicPi source)

0.  You need ruby in your computer: `ruby -v`
1.  Clone the SonicPi repository
1.  From inside SonicPi repo: `ruby app/server/ruby/bin/sonic-pi-server.rb`

TODO: Run SonicPi in server mode when RaspberryPi starts (hint: http://supervisord.org/ can help)
