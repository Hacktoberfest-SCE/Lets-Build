#!/usr/bin/python3 
print("content-type:text/plain")
print()

import subprocess as sp
import cgi

form = cgi.FieldStorage()
del_pod_name = form.getvalue("del_podname")
command="kubectl delete pod {}".format(del_pod_name)	
output=sp.getoutput(command+"  --kubeconfig /home/kruparaju/admin.conf")
print(output)
