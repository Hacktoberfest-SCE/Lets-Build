#!/usr/bin/python3 
print("content-type:text/plain")
print()

import subprocess as sp
import cgi

form = cgi.FieldStorage()
deployname = form.getvalue("deployname")
imgname = form.getvalue("deployimage")
command="kubectl create deployment {} --image={}".format(deployname,imgname)	
output=sp.getoutput("sudo "+ command)
print(output)


