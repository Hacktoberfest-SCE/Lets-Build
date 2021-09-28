#!/usr/bin/python3 
print("content-type:text/plain")
print()

import subprocess as sp
import cgi

form = cgi.FieldStorage()
del_deploy_name = form.getvalue("del_deployname")
command="kubectl delete deployment {}".format(del_deploy_name)	
output=sp.getoutput(command+"  --kubeconfig /home/kruparaju/admin.conf")
print(output)
