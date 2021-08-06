#!/bin/bash
rm ./storage/lan_devices/response.txt
# ping 255.255.255.255
arp -a >> ./storage/lan_devices/response.txt