#!/usr/bin/python3 
print("content-type:text/plain")
print()

import subprocess as sp
import cgi

form = cgi.FieldStorage()

deployname = form.getvalue("deploy_name")
replica = form.getvalue("replicas")
command="kubectl scale deployment {} --replicas={}".format(deployname,replica)
output=sp.getoutput("sudo " + command)
print(output)
