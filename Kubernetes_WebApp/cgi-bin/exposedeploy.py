#!/usr/bin/python3 
print("content-type:text/plain")
print()

import subprocess as sp
import cgi

form = cgi.FieldStorage()
expose_deployname = form.getvalue("expose_deployname")
e_port=form.getvalue("expose_port")

command="kubectl expose deployment  {} --type=NodePort --port={}".format(expose_deployname,e_port)	
output=sp.getoutput("sudo " + command)
print(output)
