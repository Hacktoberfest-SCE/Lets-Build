#!/usr/bin/python3
print("content-type: text/html")
print("Access-Control-Allow-Origin:*")
print()

import cgi
import subprocess
x=cgi.FieldStorage().getvalue("x") #x variable in query string has the input typed in by client
y=cgi.FieldStorage().getvalue("y") #y will mostly have the name
z=cgi.FieldStorage().getvalue("z") #z and f are extra arguments that has a value=0 by defalut
f=cgi.FieldStorage().getvalue("f")
if (("create" in x or "launch" in x ) and ("deployment" in x or "deploy" in x or "pod" in x or "container" in x)):
    if ("deployment" in x or "deploy" in x):
        output=subprocess.getoutput(f"sudo kubectl create deployment {y} --image {z}")  #create deployment
    else:
        output=subprocess.getoutput(f"sudo kubectl run {y} --image {z}")  #create a pod

elif ("expose" in x or "set" in x ) and ("pods"in x or "pod" in x or "container" in x or "deploy" in x or "deployment" in x or "svc" in x or "load balancer" in x or "service" in x) :
    if ("deployment" in x or "deploy" in x):
        output=subprocess.getoutput(f"sudo kubectl expose deployment {y} --port={z} --type=NodePort") #expose deployement.
    else:
        output=subprocess.getoutput(f"sudo kubectl expose pod {y} --port={z} --type=NodePort") #expose Pod.


elif ("create" in x or "scale" in x or "replicate" in x) and ("deploy" in x or "deployment" in x or "replica" in x or "replicas" in x ):
    output=subprocess.getoutput(f"sudo kubectl scale deployment {y} --replicas={z}")  #create replicas.

elif ("delete" in x or "remove" in x ) and ("deploy" in x or "deployment" in x or "pod" in x or "container" in x):
    if ("deploy" in x or "deployement" in x):
        output=subprocess.getoutput(f"sudo kubectl delete deployment {y} ")  #delete deployment.
    else:
        output=subprocess.getoutput(f"sudo kubectl delete pod {y} ")  #delete pod.

elif ("show" in x or "list" in x or "display" in  x) and ("deploy" in x or "deployment" in x or "pod" in x or "container" in x or "svc" in x or "service" in x):
    if ("deploy" in x or "deployement" in x):
        output=subprocess.getoutput("sudo kubectl get deployment")  #list deployment.
    elif ("pod" in x or "containers" in x or "pods" in x):
        output=subprocess.getoutput("sudo kubectl get pods")  #list pods.

    else:
        output=subprocess.getoutput(f"sudo kubectl get svc ")  #list svc.

elif ("delete" in x or "remove" in x ) and ("svc" in x or "load balancer" in x or "service" in x):
    output=subprocess.getoutput(f"sudo kubectl delete svc {y} ") #delete service/svc.

elif ("delete" in x or "remove" in x or "destroy" in x  ) and ("infrastructure" in x or "all" in x or "everything" in x):
    output=subprocess.getoutput("sudo kubectl delete all --all")  #delete infrastructure
    
else:
    output=subprocess.getoutput(f"sudo {x}")

print("<pre>")
print("<b>")
print(output)
print("</b>")
print("</pre>")


