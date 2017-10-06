#! /bin/bash

cat info/domains| xargs -n 1 host | tee info/host
cat info/domains| xargs -n 1 dig | tee info/dig
cat info/domains| xargs -n 1 whois | tee info/whois
cat info/host|grep address | awk '{print $4}' | sort -u | xargs -n 1 whois | tee info/ip_whois

