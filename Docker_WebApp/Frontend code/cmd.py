#! /usr/bin/python3

import cgi
import subprocess
import time

print("content-type: text/html")
print()

# FieldStrorage is  a function to take input
field = cgi.FieldStorage()
command = field.getvalue("x")

# sudo power bcoz we are runnig docker commands
output = subprocess.getoutput("sudo " + command)
print(output)
