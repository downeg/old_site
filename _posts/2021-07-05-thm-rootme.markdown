---
layout: post
title:  "THM RootMe"
date:   2021-07-05 15:09:43 +0100
categories: post update
---


Writeup on the TryHackMe room RootMe.

[Link to room.](https://tryhackme.com/room/rrootme)

## Solutions:

###  Scan the machine, how many ports are open? 

Scanning using nmap shows ports 22 (ssh) and 80 (http) are open.

```
sudo nmap -sC -sV -oN nmap -vvv 10.10.x.x
```

###  What version of Apache is running?

The ```nmap -sV``` option (service version) scan provides the answer:

```
80/tcp open  http    Apache httpd 2.4.29 ((Ubuntu))
```

###  What service is running on port 22?

nmap also provides this answer:

```
22/tcp open  ssh     OpenSSH 7.6p1 Ubuntu 4ubuntu0.3 (Ubuntu Linux; protocol 2.0)
```

###  Find directories on the web server using the GoBuster tool.

```
gobuster dir -u http://10.10.x.x -w /usr/share/wordlists/dirb/common.txt
```

###  What is the hidden directory?

A wordlist as short as dirb/common.txt shows the answer:

```
/panel                (Status: 301) [Size: 310] [--> http://10.10.x.x/panel/]
```

To be continued...
