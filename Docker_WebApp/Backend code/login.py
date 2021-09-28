#!/usr/bin/python3

print("content-type:text/html")
print()
# this is header line 


import cgi
import subprocess as sp

a = ["dileep-hub"]
b = ["Dileep@123"]

# FieldStorage is a function that will take input from the server
form = cgi.FieldStorage()
user  = form.getvalue('user')
passwd = form.getvalue('passwd')

if(user in a):
    if(passwd in b):
        final = sp.getoutput("cat  /var/www/html/JS/docker.html")
    else:
        print("invalid password")

else:
    print("invalid username")

# here final is very imp bcoz only if passd is ryt it redirects orelse not
print(final)

